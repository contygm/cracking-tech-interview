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

		while (node.next !== null && node !== null) {
			node = node.next;
		}

		node.next = new ListNode(data);		
		return node.next;
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