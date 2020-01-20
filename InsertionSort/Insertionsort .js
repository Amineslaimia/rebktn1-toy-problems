import { array } from "prop-types"

// Sort a linked list using insertion sort.
// Algorithm of Insertion Sort:

//1- Insertion sort iterates, consuming one input element each repetition, and growing a sorted output list.
//2- At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there.
// 3-It repeats until no input elements remain.

// Example 1:

// Input: 4->2->1->3
// Output: 1->2->3->4
// Example 2:

// Input: -1->5->3->4->0
// Output: -1->0->3->4->5

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function (head) {
    var node = head
    var array = []
    while (node !== null) {
        array.push(node.val)
        node = node.next
    }
    array.sort((a, b) => a - b)
    head.val = array[0]
    var node = head.next
    for (var i = 1; i < array.length; i++) {
        node.val = array[i];
        node = node.next
    }



};
var head = ListNode(4)
var node1 = ListNode(2)
var node2 = ListNode(1)
var node3 = ListNode(3)

head.next = node1
node1.next = node2
node2.next = node3
node3.next = null
