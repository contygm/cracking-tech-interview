
function urlifyTS(str:string, trueLength:number):string {
	for (let i:number = 0; i < trueLength; i++) {
		if (str[i] === " ") {
			trueLength = trueLength + 2;
			str = str.substring(0, i) +"%20" + str.substring(i+1, trueLength);
		}
		
	}
	return str.substring(0, trueLength);
}

// Test
const res:string = urlifyTS("Kit tys", 6);
console.log( "Result: ", res);
console.log( "PASS: ", res === "Kit%20ty"); 