/*
*
* Linked List Intersection
*
* Write a function linkedListIntersection that returns the node 
* at which the intersection of two linked lists begins, 
* or null if there is no such intersection.
* 
* Example:
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return D 
* as the node of intersection.
* 
*    A → B → C
*             ↘
*               D → E → F
*             ↗
*        X → Y
* 
* Given the following two linked lists list1 and list2, 
* linkedListIntersection(list1,list2) should return NULL 
* as there is no point of intersection.
* 
*    A → B → C → D
*    X → Y → Z
* 
*/

// Helper function (do not edit)
function Node(val) {
  var obj = {};
  obj.value = val || null;
  obj.next = null;
  return obj;
}



function linkedListIntersection(list1, list2) {
  // TODO: Implement this function!
  var node1 = list1
  var node2 = list2
  var str1 = ''
  var str2 = ''
  var longest = 0
  while (node1 !== null) {
    str1 = str2 + node1.val
    node1 = node1.next
  }
  while (node2 !== null) {
    str2 = str2 + node2.val
    node2 = node2.next
  }
  if (str1.length >= str2.length) {
    for (var i = 0; i < str2.length; i++) {
      if (str1.includes(str2.slice(i)) !== -1) {
        return str1.includes(str2.slice(i))
      }

    }
  } else {
    for (var i = 0; i < str2.length; i++) {
      if (str2.includes(str1.slice(i)) !== -1) {
        return str2.includes(str1.slice(i))
      }
    }
  }
  return null
}


