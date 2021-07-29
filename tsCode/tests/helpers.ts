import { LinkedList } from "../classes/LinkedList";
import { ListNode } from "../classes/ListNode";

export function checkNumArray(arr1:number[], arr2:number[]):boolean {
	if (arr1.length !== arr2.length) {
		return false
	}
	
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}

	return true;
}

export function makeSingleLinkedList(nums:number[]):LinkedList {
	const list = new LinkedList();
	nums.forEach(num => {
		list.appendToEnd(num);
	});

	return list;
}

export function isMatchingSingleLinkedList(list1:LinkedList, list2:LinkedList):boolean {
	let node1 = list1.head;
	let node2 = list2.head;
	while (node1 !== null && node2 !== null) {
		if(node1.data !== node2.data) {
			return false;
		}

		node1 = node1.next;
		node2 = node2.next;
	}
	return true;
}

export function makeListsIntersecting(nums1:number[], nums2:number[]):ListNode[] {
	const list1 = new LinkedList();
	const list2 = new LinkedList();
	
	if (nums1.length !== nums2.length) {		
		throw new Error('input arrays must be same length');
	}

	for (let i = 0; i < nums1.length; i++) {	
		if ( i === Math.floor(nums1.length/2)) {
			const newNode = list1.appendToEnd(nums1[i]);
			list2.appendNodeToEnd(newNode);
		} else if (i >= (nums1.length/2)) {
			list1.appendToEnd(nums1[i]);
		} else {
			list1.appendToEnd(nums1[i]);
			list2.appendToEnd(nums2[i]);
		}
	}

	return [list1.head, list2.head];
}

export function makeLinkedLoop(nums:number[], loopStart:number):ListNode[] {
	const list = new LinkedList();
	let loopStartNode:ListNode;
	let lastLoopNode:ListNode;

	// make list, track key nodes
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === loopStart) {
			loopStartNode = list.appendToEnd(nums[i]);
		} else if(i === nums.length-1) {
			lastLoopNode = list.appendToEnd(nums[i]);
		} else {
			list.appendToEnd(nums[i]);
		}
	}

	// complete the loop
	lastLoopNode.next = loopStartNode;

	return [list.head, loopStartNode];
}