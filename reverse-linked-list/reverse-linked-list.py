# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        curnode = head # 현재노드가 head
        prev = None;
        
        while curnode: #node가 존재할 때까지
            tmp = curnode.next;
            
            curnode.next = prev; #현재 노드의 next 값에는 이전 노드를 재할당
            prev = curnode # 현재노드 이전노드
            curnode = tmp #node = node.next
        return prev # 이전 노드를 리턴
        