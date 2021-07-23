
// 1.1 Is Unique
function isUnique(str) {
	let charArray = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		if (charArray[char.charCodeAt()]) {
			return false;
		} 

		charArray[char.charCodeAt()] = true;
	}
	return true;
}

// 1.2 Check Permutations
function checkPermutation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	// make a hash
	let charArray = [];
	for (let i = 0; i < str1.length; i++) {
		const char = str1[i];

		if (!charArray[char.charCodeAt()]) {
			charArray[char.charCodeAt()] = 0;
		} 

		charArray[char.charCodeAt()]++;
	}

	// check if permuatation
	for (let i = 0; i < str2.length; i++) {
		const char = str2[i];
		charArray[char.charCodeAt()]--;

		if (charArray[char.charCodeAt()] < 0) {
			return false;
		}
	}
	return true;
}

// 1.3 URLify
function urlify(str, trueLength) {
	for (let i = 0; i < trueLength; i++) {
		if (str[i] === " ") {

			trueLength = trueLength + 2;
			str = str.substring(0, i) +"%20" + str.substring(i+1, trueLength);
		}
		
	}

	return str.substring(0, trueLength);
}

// 1.4 Palindrome Permutation
function palindromePermutation(str) {
	let charArray = [];
	const trimmedStr = str.replace(' ', '').toLowerCase();

	// make hash table
	for (let i = 0; i < trimmedStr.length; i++) {
		const char = trimmedStr[i];
		
		if (!charArray[char.charCodeAt()]) {
			charArray[char.charCodeAt()] = 0;
		} 

		charArray[char.charCodeAt()]++;
	}

	// set flags + counts
	const isOdd = trimmedStr.length % 2 === 0 ? false : true;
	let singleton = 0;

	// check if it's a palindrome permutation
	for (let i = 0; i < trimmedStr.length; i++) {
		const char = trimmedStr[i];

		if (charArray[char.charCodeAt()] === 1) {
			singleton++;
		} else if (charArray[char.charCodeAt()] !== 2) {
			return false;
		}

		if ((isOdd && singleton > 1) || (!isOdd && singleton > 0)) {
			return false;
		}
	}

	return true;
}

// 1.5 One Away
function oneAway(str1, str2) {
	const lengthDiff = str1.length - str2.length;
	if (lengthDiff > 1 || lengthDiff < -1) {
		return false;
	} 
	else if (lengthDiff === 1) { // insert && remove
		for (let i = 0; i < str1.length; i++) {
			if (str1[i] !== str2[i] && str1[i+1] !== str2[i]) {
				return false;
			}
		}
	} else if (lengthDiff === 0) { // replace
		let changedDetected = false;
		for (let i = 0; i < str1.length; i++) {
			if (!changedDetected && str1[i] !== str2[i]) {
				changedDetected = true;
			} else if(changedDetected && str1[i] !== str2[i]) {
				return false;
			}
		}
	}

	return true;
}

// TODO 1.6 String Compression
function stringCompression(str) {
	let compressedStr = '';
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		count++;
		if (str[i] !== str[i+1]) {
			compressedStr += `${char}${count}`;
			count = 0;
		}
	}

	return compressedStr.length >= str.length ? str : compressedStr;
}
// TODO 1.7 Rotate Matrix
// TODO 1.8 Zero Matrix
// TODO 1.9 String Rotation

module.exports = {
    urlify, 
	isUnique,
	checkPermutation,
	palindromePermutation, 
	oneAway,
	stringCompression
};
