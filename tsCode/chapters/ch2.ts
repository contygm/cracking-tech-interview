import { sum } from "lodash";
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
export function kthToLast(list:LinkedList, k:number):number {
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

// 2.3 Delete Middle Node
export function deleteMiddleNode(node:ListNode):boolean {
	if (node === null || node.next === null) {
		return false;
	}

	const next = node.next;
	node.data = next.data;
	node.next = next.next;
	return true;
}

// 2.4 Partition
export function partition(list:LinkedList, point:number):LinkedList {
	let beforePoint:LinkedList = new LinkedList();
	let afterPoint:LinkedList = new LinkedList();
	let node = list.head;

	// split into 2 seperate lists based on point
	while (node) {
		if (node.data < point) {
			beforePoint.appendToEnd(node.data);
		} else {
			afterPoint.appendToEnd(node.data);
		}
		
		node = node.next;
	}

	// add the lists together
	node = afterPoint.head;

	while (node) {
		beforePoint.appendToEnd(node.data);

		node = node.next;
	} 


	return beforePoint;
}

// TODO 2.5 Sum Lists
// digists are in reverse order
// return sum of the numbers
export function sumLists(num1:LinkedList, num2:LinkedList):LinkedList {
	let sum = new LinkedList();
	let node1 = num1.head;
	let node2 = num2.head;

	while (node1 && node2) {
		const nodeSum = node1.data + node2.data;

		sum.appendToEnd(nodeSum);

		node1 = node1.next;
		node2 = node2.next;
	}
	return sum;
}

// TODO 2.6 Palindrome
// TODO 2.7 Intersection
// TODO 2.8 Loop Detection