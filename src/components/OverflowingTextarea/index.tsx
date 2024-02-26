import { forwardRef } from '@chakra-ui/system'
import { Textarea, type TextareaProps } from '@chakra-ui/textarea'
import {
  type ChangeEvent,
  type FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react'
import { useNumber } from 'react-use'
import { MotionFlex, transitions } from 'src/components/motion'
import { useBoolean } from '@chakra-ui/hooks'

export const OverflowingTextarea: FC<
  TextareaProps & { maxAdjustedHeight: number }
> = forwardRef(({ maxAdjustedHeight, ...props }, forwardedRef) => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [adjustedHeight, { set: setHeight }] = useNumber(0)
  const [wasMounted, { on: completeMount }] = useBoolean(false)

  if (forwardedRef) {
    if (typeof forwardedRef === 'function') {
      forwardedRef(ref.current)
    } else {
      forwardedRef.current = ref.current
    }
  }

  const onResize = useCallback(
    (el: HTMLTextAreaElement) => {
      if (maxAdjustedHeight && el.scrollHeight > maxAdjustedHeight) {
        el.style.height = 'auto'
        el.style.height = `${maxAdjustedHeight}px`
        setHeight(maxAdjustedHeight)
        return
      }
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
      setHeight(el.scrollHeight)
    },
    [maxAdjustedHeight, setHeight],
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver(() => onResize(el))
    observer.observe(el)

    onResize(el)

    return () => {
      observer.disconnect()
    }
  }, [ref])

  useLayoutEffect(() => {
    // NOTE(ken): We do this because otherwise all content will animate during mount.
    completeMount()
  }, [])

  const onChangeHandler = (el: ChangeEvent<HTMLTextAreaElement>) => {
    onResize(el.target)
    if (props.onChange) {
      props.onChange(el)
    }
  }

  return (
    <MotionFlex
      align="start"
      transition={
        wasMounted
          ? transitions.fast
          : {
              duration: 0,
            }
      }
      initial={{
        height: wasMounted ? adjustedHeight : 'auto',
      }}
      animate={{
        height: adjustedHeight,
      }}
      w="full"
    >
      <Textarea
        {...props}
        overflow="hidden"
        resize="none"
        w="full"
        wordBreak="break-word"
        ref={ref}
        onChange={onChangeHandler}
      />
    </MotionFlex>
  )
})
