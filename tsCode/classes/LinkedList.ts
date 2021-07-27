import {ListNode} from "./ListNode";

export class LinkedList {
	public head:ListNode;

	constructor(data?:ListNode) {
		this.head = data ?? null;
	}

	/**
	 * append new node to the end of list
	 */
	public appendToEnd(data:number) {
		if (this.head === null) {
			this.head = new ListNode(data);
			return this.head;
		}

		let node:ListNode = this.head;

		while (node.next !== null && node !== node) {
			node = node.next;
		}

		node.next = new ListNode(data);

		return node.next;
	}
	
	/**
	 * delete node from anywhere in linked list
	 */
	public delete(data:number) {
		if (this.head === null) {
			return this.head;
		}

		let node:ListNode = this.head;
		if (node.data === data) { // move head
			return this.head.next;
		}

		while (node.next !== null && node !== null) {
			if (node.next.data === data) {
				node.next = node.next.next;	// remove node
				return this.head;	// head stays the same
			}
			node = node.next;
		}

		return this.head;
	}

	/**
	 * make the linked list into an array
	 */
	public makeArray() {
		let nums = [];

		let node:ListNode = this.head;

		while (node !== null) {
			nums.push(node.data);
			node = node.next;
		}

		return nums;
	}
}