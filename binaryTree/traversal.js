var TreeNode = (function () {
    function TreeNode(value) {
        this.data = value;
    }
    return TreeNode;
}());
var BinaryTree = (function () {
    function BinaryTree(str) {
        this.str = str;
        if (!this.str) {
            throw Error('str cannot be empty.');
        }
        this.str = this.str.trimLeft().trimRight();
        this.root = {
            data: this.str[0],
            leftChild: null,
            rightChild: null
        };
        this.addNode(this.root, 0);
    }
    BinaryTree.prototype.addNode = function (parent, pIndex) {
        var leftChildIndex = 2 * pIndex + 1;
        if (leftChildIndex < this.str.length && this.str[leftChildIndex] !== ' ') {
            parent.leftChild = new TreeNode(this.str[leftChildIndex]);
            this.addNode(parent.leftChild, leftChildIndex);
        }
        var rightChildIndex = 2 * pIndex + 2;
        if (rightChildIndex < this.str.length && this.str[rightChildIndex] !== ' ') {
            parent.rightChild = new TreeNode(this.str[rightChildIndex]);
            this.addNode(parent.rightChild, rightChildIndex);
        }
    };
    BinaryTree.prototype._preOrder = function (node) {
        var result = '';
        if (node) {
            result += node.data;
            result += this._preOrder(node.leftChild);
            result += this._preOrder(node.rightChild);
        }
        return result;
    };
    BinaryTree.prototype.PreOrder = function () {
        return this._preOrder(this.root);
    };
    BinaryTree.prototype._inOrder = function (node) {
        var result = '';
        if (node) {
            result += this._inOrder(node.leftChild);
            result += node.data;
            result += this._inOrder(node.rightChild);
        }
        return result;
    };
    BinaryTree.prototype.InOrder = function () {
        return this._inOrder(this.root);
    };
    BinaryTree.prototype._postOrder = function (node) {
        var result = '';
        if (node) {
            result += this._postOrder(node.leftChild);
            result += this._postOrder(node.rightChild);
            result += node.data;
        }
        return result;
    };
    BinaryTree.prototype.PostOrder = function () {
        return this._postOrder(this.root);
    };
    BinaryTree.prototype.toString = function () {
        return JSON.stringify(this.root);
    };
    return BinaryTree;
}());
var test = function () {
    var str = 'ABCDE FGH I  JK'; // ' ' is meaning empty node
    var tree = new BinaryTree(str);
    console.log(tree.toString());
    console.log("Pre Order: " + tree.PreOrder());
    console.log("In Order: " + tree.InOrder());
    console.log("Post Order: " + tree.PostOrder());
};
test();
