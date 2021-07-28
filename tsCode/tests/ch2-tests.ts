import * as ch2 from "../chapters/ch2";
import * as helpers from "./helpers";

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

	console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 2.1 Remove Dups Tests \n --------------------" );
    
	for (var i = 0; i < tests.length; i++) {
		var test = tests[i];
		var res = ch2.kthToLast(test.input1, test.input2);
		var pass = res === test.output;

		// green : red
		var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
		console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res: " + res + " -> " +test.message );
	}
}

removeDupsTests();
kthToLastTests();