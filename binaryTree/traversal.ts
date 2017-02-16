class BinaryTree {
  private root: any;
  constructor(private str: string) {
    this.root = {
      data: this.str[0],
      leftChild: {},
      rightChild: {}
    }
    this.addNode(this.root, 0);
  }

  private addNode(parent, pIndex): void {

  }
}