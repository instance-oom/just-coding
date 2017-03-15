// https://leetcode.com/problems/reverse-linked-list/#/description

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) return head;
  var tempArr = [];
  while (head) {
    tempArr.push(new ListNode(head.val));
    head = head.next;
  }
  tempArr.reverse();
  for (var i = 0; i < tempArr.length - 1; i++) {
    tempArr[i].next = tempArr[i + 1];
  }
  return tempArr[0];
};

var list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4
      }
    }
  }
}

console.log(reverseList(list));
console.log(reverseList([]));