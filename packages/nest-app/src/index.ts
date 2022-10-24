import { foo } from '@/foo'

const a = 1
const b = 21

console.log(a, b, 4)

const add = (a: number, b: number) => {
  return a + b
}

add(a, b)

console.log(foo)
