import * as ch2 from "../chapters/ch2";
import * as helpers from "./helpers";
import { LinkedList } from "../classes/LinkedList";
import { ListNode } from "../classes/ListNode";

function removeDupsTests() {
	var tests = [
		{
			"input": helpers.makeSingleLinkedList([3,2,4,5,0,1,2]),
			"output": helpers.makeSingleLinkedList([3,2,4,5,0,1]),
			"message": "out of order dups"
		},
		{
			"input": helpers.makeSingleLinkedList([0,1,1,2,3]),
			"output": helpers.makeSingleLinkedList([0,1,2,3]),
			"message": "in order dups"
		},
		{
			"input": helpers.makeSingleLinkedList([8,1,7,3,3,7,4,5]),
			"output": helpers.makeSingleLinkedList([8,1,7,3,4,5]),
			"message": "multiple dups"
		}
	]

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.1 Remove Dups Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.removeDups(test.input);
		var pass = helpers.isMatchingSingleLinkedList(res, test.output);

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + JSON.stringify(res.makeArray()) + " -> " +test.message );
	}
}

function kthToLastTests() {
	var tests = [
		{
			"input1": helpers.makeSingleLinkedList([0,1,2,3,4,5]),
			"input2" : 2,
			"output": 3,
			"message": "basic case: second to last"
		},
		{
			"input1": helpers.makeSingleLinkedList([0,1,2,3,4,5,6]),
			"input2": 4, 
			"output": 2,
			"message": "basic case: 4th to last"
		},
		{
			"input1": helpers.makeSingleLinkedList([0,1,2,3]),
			"input2": 3, 
			"output": 0,
			"message": "return first element"
		},
		{
			"input1": helpers.makeSingleLinkedList([0,1,2,3,4,5]),
			"input2": 0, 
			"output": 5,
			"message": "return last element"
		}
	]

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.2 Return Kth to Last Element Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.kthToLast(test.input1, test.input2);
		var pass = res === test.output;

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res: " + res + " -> " +test.message );
	}
}

function deleteMiddleNodeTests() {

	const list1 = new LinkedList();
	let l1_node;
	[0,1,2,3,4,5].forEach(num => {
		const temp = list1.appendToEnd(num);
		if(num === 2) {
			l1_node = temp;
		}
	});

	const list2 = new LinkedList();
	let l2_node;
	[0,1,2,3,4,5].forEach(num => {
		const temp = list2.appendToEnd(num);
		if(num === 4) {
			l2_node = temp;
		}
	});

	var tests = [
		{
			"input1": l1_node,
			"input2": list1,
			"output": helpers.makeSingleLinkedList([0,1,3,4,5]),
			"message": "basic case"
		},
		{
			"input1": l2_node,
			"input2": list2,
			"output": helpers.makeSingleLinkedList([0,1,2,3,5]),
			"message": "basic case"
		}
	]

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.3 Delete Middle Node Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.deleteMiddleNode(test.input1);
		var pass = helpers.isMatchingSingleLinkedList(test.input2, test.output);

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res: " + JSON.stringify(test.input2.makeArray()) + " -> " +test.message );
	}
}

function partitionTests() {
	var tests = [
		{
			"input1": helpers.makeSingleLinkedList([3,5,8,5,10,2,1]),
			"input2": 5,
			"output": helpers.makeSingleLinkedList([3,2,1,5,8,5,10]),
			"message": "even length array"
		},
		{
			"input1": helpers.makeSingleLinkedList([0,1,6,4,1,2,3]),
			"input2": 2,
			"output": helpers.makeSingleLinkedList([0,1,1,6,4,2,3]),
			"message": "odd length array"
		}
	];

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.4 Partition Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.partition(test.input1, test.input2);
		var pass = helpers.isMatchingSingleLinkedList(res, test.output);

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + JSON.stringify(res.makeArray()) + " -> " +test.message );
	}
}

function sumListsTests() {
	var tests = [
		{
			"input1": helpers.makeSingleLinkedList([7,1,6]),
			"input2": helpers.makeSingleLinkedList([5,9,2]),
			"output": helpers.makeSingleLinkedList([2,1,9]),
			"message": "carry over values in nodeSums"
		},
		{
			"input1": helpers.makeSingleLinkedList([1,0,1]),
			"input2": helpers.makeSingleLinkedList([2,3,5]),
			"output": helpers.makeSingleLinkedList([3,3,6]),
			"message": "base case: simple math"
		}
	];

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.5 Sum Lists Tests \n --------------------");
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.sumLists(test.input1, test.input2);
		var pass = helpers.isMatchingSingleLinkedList(res, test.output);

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + JSON.stringify(res.makeArray()) + " -> " + test.message );
	}
}

function palindromeTests() {
	var tests = [
		{
			"input": helpers.makeSingleLinkedList([0,1,2,1,0]),
			"output": true,
			"message": "odd length palindrome"
		},
		{
			"input": helpers.makeSingleLinkedList([0,1,2,2,1,0]),
			"output": true,
			"message": "even length palindrome"
		},
		{
			"input": helpers.makeSingleLinkedList([0,1,0,1,2]),
			"output": false,
			"message": "not palindrome, but close"
		},
		{
			"input": helpers.makeSingleLinkedList([0,1,1,2,0,1,1]),
			"output": false,
			"message": "not palindrome, but close"
		}
	]

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.6 Palindrome Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.palindrome(test.input);
		var pass = res === test.output;

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res: " + res + " -> " + test.message );
	}
}

removeDupsTests();
kthToLastTests();
deleteMiddleNodeTests();
partitionTests();
sumListsTests();
palindromeTests();