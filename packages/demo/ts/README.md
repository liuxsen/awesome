## typescript 代码重构

```ts
// before
export const add = (num: number, num2: number) => {
  return num + num2
}
// extract after
export const add = (num: number, num2: number) => {
  const sum = num + num2
  return sum
}

// extract after
export const add = (num: number, num2: number) => {
  return newFunction()

  function newFunction () {
    return num + num2
  }
}
// extract after
export const add = (num: number, num2: number) => {
  return newFunction(num, num2)
}
function newFunction (num: number, num2: number) {
  return num + num2
}

// extract after
export const add = (num: number, num2: number) => num + num2

```

## ts-debug 测试

[ts-debug](https://pkief.medium.com/how-to-debug-typescript-with-vs-code-9cec93b4ae56)