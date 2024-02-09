import { Fn, Stack } from 'aws-cdk-lib'
export function getSuffixFromStack(stack: Stack) {
  console.log(stack.stackId)
  const shortStackId = Fn.select(2, Fn.split('/', stack.stackId))
  const suffix = Fn.select(4, Fn.split('-', shortStackId))
  return suffix
}
