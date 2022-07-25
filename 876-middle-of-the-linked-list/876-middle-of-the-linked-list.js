/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    //길이, 현재 노드 선언
  // 현재노드가 값이 있으면 길이 +1
//현재 노드에서 다음 노드로 옮기기
  //mid를 구해 다음노드부터 출력
  let curNode = head;
  let length = 0;
  while(curNode !== null){
    length++
    curNode = curNode.next;
  }
  for(let i =0; i<parseInt(length/2); i++){
    head = head.next;
  }
  return head;
    
};