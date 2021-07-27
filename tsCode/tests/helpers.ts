import { LinkedList } from "../classes/LinkedList";

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
	while (node1.next !== null && node2.next !== null) {
		if(node1.next !== node2.next) {
			return false;
		}

		node1 = node1.next;
		node2 = node2.next;
	}
	return true;
}