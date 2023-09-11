function linearSearch(array, searchTerm) {
	/*
	 ** Check each element from start to finish
	 ** until you find an element that matches the search term
	 **
	 ** Return the index of the found element
	 */
	let index = 0;
	for (let i = 0; i < array.length; i++) {
		if(array[i] == searchTerm){
			index = i;
			break;
		}
	}
	return index;
}

module.exports = linearSearch;
