/**
 * Requirements:
 * For factor of three print Fizz instead of the number
 * For factor of five print Buzz instead of the number
 * For numbers which are factors of both three and five print FizzBuzz instead of the number
 */
function say(n: number) {
    if(n % 15 == 0)
      return 'FizzBuzz'

    if(n % 3 == 0)
      return 'Fizz'

    if(n % 5 == 0)
      return 'Buzz'

    return n
}

export default say