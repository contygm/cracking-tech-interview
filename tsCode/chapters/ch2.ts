import { LinkedList } from "../classes/LinkedList";
import { ListNode } from "../classes/ListNode";

// 2.1 Remove Dups
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

// TODO 2.2 Return Kth to Last
// TODO 2.3 Delete Middle Nose
// TODO 2.4 Partition
// TODO 2.5 Sum Lists
// TODO 2.6 Palindrome
// TODO 2.7 Intersection
// TODO 2.8 Loop Detection