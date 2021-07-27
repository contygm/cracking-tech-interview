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

removeDupsTests();