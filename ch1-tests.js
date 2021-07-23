// import * as ch1 from './jsCode/ch1.js'
const ch1 = require("./jsCode/ch1.js");

function checkNumArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function isUniqueTests() {
    var tests = [
        {
            "output": true,
            "input": "abcde"
        },
        {
            "output": false,
            "input": "abcdcz"
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.1 isUnique Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.isUnique(test.input);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res);
    }
}

function checkPermTests() {
    var tests = [
        {
            "output": true,
            "input1": "tommarvoloriddle",
            "input2": "iamlordvoldemort"
        },
        {
            "output": true,
            "input1": "bad",
            "input2": "dab"
        },
        {
            "output": false,
            "input1": "bad",
            "input2": "dad"
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.2 Check Permutation Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.checkPermutation(test.input1, test.input2);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res);
    }
}

function urlifyTests() {
    var tests = [
        {
            "output": "Kit%20ty",
            "input": "Kit tys",
            "length": 6
        },
        {
            "output": "Mr%20John%20Smith",
            "input": "Mr John Smith    ",
            "length": 13
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.3 Urlify Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.urlify(test.input, test.length);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res);
    }
}

function palindromePermTests() {
    var tests = [
        {
            "output": true,
            "input": "Tact Coa",
        },
        {
            "output": true,
            "input": "Car care",
        },
        {
            "output": false,
            "input": "Hello",
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.4 Palindrome Permutation Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.palindromePermutation(test.input);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res);
    }
}

function oneAwayTests() {
    var tests = [
        {
            "output": true,
            "input1": "pale",
            "input2": "ple"
        },
        {
            "output": true,
            "input1": "pales",
            "input2": "pale"
        },
        {
            "output": true,
            "input1": "pale",
            "input2": "bale"
        },
        {
            "output": false,
            "input1": "pale",
            "input2": "bake"
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.4 One Away Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.oneAway(test.input1, test.input2);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res);
    }
}

function stringCompressionTests() {
    var tests = [
        {
            "output": "a2b1c5a3",
            "input": "aabcccccaaa",
            "message": "normal compression lowercase"
        },
        {
            "output": "aabbccddef",
            "input": "aabbccddef",
            "message": "print original output bcuz modified is longer, lowercase"
        },
        {
            "output": "H3h2e2o2",
            "input":  "HHHhheeoo",
            "message": "normal compression mixed case"
        },
        {
            "output": "HHHhheeo",
            "input":  "HHHhheeo",
            "message": "print original output bcuz modified is longer, mixed case"
        }
    ];

    console.log('\x1b[36m%s\x1b[0m', " -------------------- \n 1.6 String Compression Tests \n --------------------" );
    
    for (var i = 0; i < tests.length; i++) {
        var test = tests[i];
        var res = ch1.stringCompression(test.input);
        var pass = res === test.output; 
        // green : red
        var colorLog = pass ? '\x1b[32m%s\x1b[0m' : '\x1b[31m%s\x1b[0m';
        console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res + " -> " +test.message );

        // var colorLog = pass ? '\x1b[32m%s\x1b[0m\x1b[33m%s\x1b[0m' : '\x1b[31m%s\x1b[0m\x1b[31m%s\x1b[0m';
        // console.log(colorLog, i + 1 + ". Pass: " + pass + " -> res:" + res, " -> " +test.message );
    }
}

isUniqueTests();
checkPermTests();
urlifyTests();
palindromePermTests();
oneAwayTests();
stringCompressionTests();


