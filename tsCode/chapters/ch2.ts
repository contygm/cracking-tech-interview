import { LinkedList } from "../classes/LinkedList";
import { ListNode } from "../classes/ListNode";

// 2.1 Remove Dups
// well i can't read and this could've been a double linked list
// which would've been nice, but i'm leaving it
export function removeDups(list:LinkedList):LinkedList {

	let node:ListNode = list.head;

	let numsHash:boolean[] = [];
	numsHash[node.data] = true;

	while (node.next) {
		if (numsHash[node.next.data]) {
			// delete node
			node.next = node.next.next;
		} else {
			numsHash[node.next.data] = true;
			node = node.next;
		}
	}

	return list;
}

// 2.2 Return Kth to Last
export function kthToLast(list:LinkedList, k:number) {
	let dataHash:number[] = [];
	let node:ListNode = list.head;
	let count = 0;
	while (node) {
		dataHash[count] = node.data;
		count++;
		node = node.next;
	}

	const index = count - 1 - k;

	return dataHash[index];
}

// TODO 2.3 Delete Middle Nose
export function deleteMiddleNode(node:ListNode):boolean {
	if (node === null || node.next === null) {
		return false;
	}

	const next = node.next;
	node.data = next.data;
	node.next = next.next;
	return true;
}
// TODO 2.4 Partition
// TODO 2.5 Sum Lists
// TODO 2.6 Palindrome
// TODO 2.7 Intersection
// TODO 2.8 Loop Detection