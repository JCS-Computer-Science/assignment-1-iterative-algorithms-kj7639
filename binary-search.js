function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let index;
	let middle = Math.floor(array.length/2);
	for(let i = 0; i < 25; i++){
		console.log(middle);
		if(array[middle] == searchTerm){
			index = middle;
			break;
		}else if(middle > searchTerm){
			middle = Math.floor(middle/2);
		}else if(middle < searchTerm){
			middle = Math.floor(middle/2) + middle;
		}
	}
	return index;
}

module.exports = binarySearch;
