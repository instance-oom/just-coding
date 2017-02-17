class TreeNode {
  data: string;
  leftChild: TreeNode;
  rightChild: TreeNode;

  constructor(value: string) {
    this.data = value;
  }
}

class BinaryTree {
  private root: TreeNode;

  constructor(private str) {
    if (!this.str) {
      throw Error('str cannot be empty.');
    }
    this.str = this.str.trimLeft().trimRight();
    this.root = {
      data: this.str[0],
      leftChild: null,
      rightChild: null
    }
    this.addNode(this.root, 0);
  }

  private addNode(parent: TreeNode, pIndex: number): void {
    let leftChildIndex = 2 * pIndex + 1;
    if (leftChildIndex < this.str.length && this.str[leftChildIndex] !== ' ') {
      parent.leftChild = new TreeNode(this.str[leftChildIndex]);
      this.addNode(parent.leftChild, leftChildIndex);
    }

    let rightChildIndex = 2 * pIndex + 2;
    if (rightChildIndex < this.str.length && this.str[rightChildIndex] !== ' ') {
      parent.rightChild = new TreeNode(this.str[rightChildIndex]);
      this.addNode(parent.rightChild, rightChildIndex);
    }
  }

  private _preOrder(node: TreeNode): string {
    let result = '';
    if (node) {
      result += node.data;
      result += this._preOrder(node.leftChild);
      result += this._preOrder(node.rightChild);
    }
    return result;
  }

  public PreOrder(): string {
    return this._preOrder(this.root);
  }

  private _inOrder(node: TreeNode): string {
    let result = '';
    if (node) {
      result += this._inOrder(node.leftChild);
      result += node.data;
      result += this._inOrder(node.rightChild);
    }
    return result;
  }

  public InOrder(): string {
    return this._inOrder(this.root);
  }

  private _postOrder(node: TreeNode): string {
    let result = '';
    if (node) {
      result += this._postOrder(node.leftChild);
      result += this._postOrder(node.rightChild);
      result += node.data;
    }
    return result;
  }

  public PostOrder(): string {
    return this._postOrder(this.root);
  }

  public toString(): string {
    return JSON.stringify(this.root);
  }
}

let test = () => {
  let str = 'ABCDE FGH I  JK'; // ' ' is meaning empty node
  let tree = new BinaryTree(str);
  console.log(tree.toString());
  console.log(`Pre Order: ${tree.PreOrder()}`);
  console.log(`In Order: ${tree.InOrder()}`);
  console.log(`Post Order: ${tree.PostOrder()}`);
}
test();