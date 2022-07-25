# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curNode = head;
        length =0;
        
        while curNode:
            length=length+1
            curNode = curNode.next;
            
        length = int(length/2)    
            
        while length>0:
            head = head.next
            length-= 1
        return head;
        