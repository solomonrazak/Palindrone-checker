//building a palindrome checker
//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
// and turn everything into the same case (lower or upper case) in order to check for palindromes.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

//lets define the function cleanUpNonAlpha()

function cleanUpNonAlpha(str){
	return str.replace(/[\W_]/g, ""); // to remove all alphanumeic characters.
}

// function to convert to uppercase
function makeUpperCaseStr(str){
	return str.toUpperCase();
}


//function to reverse str
function flipStr(str){
	return str.split("").reverse().join("");

}







function palindrome(str){
	
    // clean up sring by Removing all non-alphanumeric characters.
    const cleaneUpStr = cleanUpNonAlpha(str);



    // convert all cleaned up strings to uppercase.
    const upperCaseStr = makeUpperCaseStr(cleaneUpStr)



    //Reverse uppercasse cleane up string 
    const reversedStr = flipStr(upperCaseStr);
    console.log(`Is ${upperCaseStr} the same as ${reversedStr}?`);

    return reversedStr === upperCaseStr;



    //Compare reversed string and uppercase string
    //if they match or are the same is a palindrone.(return true)

}