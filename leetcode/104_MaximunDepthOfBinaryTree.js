// https://leetcode.com/problems/maximum-depth-of-binary-tree/?tab=Description

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;
  var l_depth = maxDepth(root.left) + 1;
  var r_depth = maxDepth(root.right) + 1;
  return Math.max(l_depth, r_depth);
};

var tree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      right: { val: 4 }
    },
    right: { val: 6 }
  },
  right: { val: 5 }
}
/*     1
*     / \
*    2   5
*   / \
*  3   6
*  \
*   4    
*/

console.log(maxDepth(tree));