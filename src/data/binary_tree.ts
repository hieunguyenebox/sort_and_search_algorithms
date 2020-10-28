
interface INode {
  left?: INode
  right?: INode
  data: any
}

const node = function (data: any, left?: INode, right?: INode) {
  return {
    left,
    right,
    data
  }
}

const root = node(0)
root.left = node(1)
root.right = node(2)

root.left.left = node(3)
root.right.right = node(4)

const traverse = (root: INode, value: number): INode | undefined => {

  let result = undefined
  if (root.data === value) { result = root }

  if (!result && root.left) {
    result = traverse(root.left, value)
  }

  if (!result && root.right) {
    result = traverse(root.right, value)
  }

  return result
}