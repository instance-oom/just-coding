// https://leetcode.com/problems/same-tree/?tab=Description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return JSON.stringify(p) === JSON.stringify(q);
};

var isSameTree2 = function (p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) return false;
  if (p.val !== q.val) return false;
  return isSameTree2(p.left, q.left) && isSameTree2(p.right, q.right);
};

var tree1 = {
  val: 1,
  left: { val: 1, right: { val: 2 } },
  right: { val: 'dasdasd' }
}

var tree2 = {
  val: 1,
  left: { val: 1, right: { val: 2 } }
}

var tree3 = {
  val: 1,
  left: { val: 1, right: { val: 2 } },
  right: { val: 'dasdasd' }
}

var tree4 = {
  val: 1,
  left: { val: 1, right: { val: 2 } },
  right: { val: 'dasdsssasd' }
}

console.log(`tree1 and tree2 => ${isSameTree2(tree1, tree2)}`);
console.log(`tree1 and tree3 => ${isSameTree2(tree1, tree3)}`);
console.log(`tree1 and tree4 => ${isSameTree2(tree1, tree4)}`);