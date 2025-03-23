function firstChar(text) {
	let trimmedText = text.trim();
	if(trimmedText.length > 0){
		return trimmedText.at(0);
	}else{
		return "";
	}
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
// alert(firstChar(text));
