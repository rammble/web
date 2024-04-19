import {FC, useState} from 'react'
import {HStack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import {Button} from "@chakra-ui/button";
import {getGetPostRepliesQueryKey, useQueryClient, useReplyToPostMutation} from "@rammble/sdk";

export interface ReplyInputProps {
  postId: string
}

export const ReplyInput: FC<ReplyInputProps> = ({
  postId
}) => {
  const queryClient = useQueryClient()

  const [content, setContent] = useState('')

  const { mutate: createReply } = useReplyToPostMutation({
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: getGetPostRepliesQueryKey({postId}),
      }),
  })

  return (

    <HStack w={'full'}>
      <Input
        value={content}
        onChange={(e) => {
          setContent(e.target.value)
        }}
        size={'3'}/>
      <Button
        size="3"
        colorScheme="accent"
        onClick={() => {
          setContent('')

          createReply({
            postIdReplyTo: postId,
            body: content
          })
        }}
      >
        Post
      </Button>
    </HStack>
  )
}
