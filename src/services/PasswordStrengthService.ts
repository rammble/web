const rules = [
  {
    regex: /[a-z]+/,
    message: 'lowercase',
  },
  {
    regex: /[A-Z]+/,
    message: 'uppercase',
  },
  {
    regex: /[0-9]+/,
    message: 'number',
  },
]

const strengthLevels = ['Too Weak', 'Weak', 'Medium', 'Strong', 'Very Strong']

export default class PasswordStrengthService {
  static check(password: string, minLength: number, maxLength: number) {
    if (password?.length <= minLength) {
      return strengthLevels[0]
    }

    let strength = 0

    if (password?.length >= 25) {
      console.log(true)
      strength++
    }

    rules.forEach((rule) => {
      const isValid = rule.regex.test(password)

      if (isValid) strength++
    })

    return strengthLevels[strength]
  }
}
