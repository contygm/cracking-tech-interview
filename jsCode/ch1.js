
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

// 1.6 String Compression
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
// 1.7 Rotate Matrix
function rotateMatrix(matrix) {

	// Approach matrix in layers, starting outside
	const layers = matrix.length / 2;
	
	// go through each layer
	for (let layer = 0; layer < 2; layer++) { 

		const lastIndex = matrix.length - 1 - layer;

		// loop through each element in layer
		// COLUMN / ROW
		for (let i = layer; i < lastIndex; i++) {
			// use this for decreasing index
			const offset = i - layer;

			// top[i] (top right)
			const temp = matrix[layer][lastIndex - offset];
		
			// top[i] <- left[i] 
			matrix[layer][lastIndex - offset] = matrix[i][layer];

			// left[i] <- bottom[i]
			matrix[i][layer] = matrix[lastIndex][i];

			// bottom[i] <- right[i] 
			matrix[lastIndex][i] = matrix[lastIndex - offset][lastIndex];

			// right[i] <-  top[i]
			matrix[lastIndex - offset][lastIndex]  = temp;

		}
	}

	return matrix;
}

// 1.8 Zero Matrix
// if element = 0 in MxN, make column and row 0
function zeroMatrix(matrix) {

	// holds [row, col] for zero locations
	let zeros = []; 

	// find the zeros
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[row].length; col++) {
			if (matrix[row][col] === 0) {
				zeros.push([row, col]);
			}
		}
	}

	// flip row + column to zero
	zeros.forEach(zero => {
		const zeroRow = zero[0];
		const zeroCol = zero[1];

		for (let row = 0; row < matrix.length; row++) {
			matrix[row][zeroCol] = 0;
		}

		for (let col = 0; col < matrix[0].length; col++) {
			matrix[zeroRow][col] = 0;
		}
	});

	return matrix;
}

// TODO 1.9 String Rotation
function stringRotation(str1, str2) {
	const longStr2 = str2 + str2;
	if(str1.length === str2.length && str1.length > 0) {
		return longStr2.includes(str1);
	}
	return false;
}

module.exports = {
    urlify, 
	isUnique,
	checkPermutation,
	palindromePermutation, 
	oneAway,
	stringCompression,
	rotateMatrix,
	zeroMatrix,
	stringRotation
};
