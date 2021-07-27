
class LinkedList {
	private head:ListNode;

	constructor(data:ListNode) {
		this.head = data;
	}

	/**
	 * append new node to the end of list
	 */
	public appendToEnd(data:number) {
		let node:ListNode = this.head;

		while (node.next !== null) {
			node = node.next;
		}

		node.next = new ListNode(data);
	}
	
	/**
	 * delete node from anywhere in linked list
	 */
	public delete(head:ListNode, data:number) {
		if (head === null) {
			return null;
		}

		let node:ListNode = head;
		if (node.data === data) { // move head
			return head.next;
		}

		while (node.next !== null) {
			if (node.next.data === data) {
				node.next = node.next.next;	// remove node
				return head;	// head stays the same
			}
			node = node.next;
		}

		return head;
	}
}