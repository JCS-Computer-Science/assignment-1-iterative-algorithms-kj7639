function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	for (let i = array.length; i > 0; i--) {
		if(array[i] < array[i-1]){
			let small = array[i];
			let big = array[i-1];
			
		}
		
	}

	return array;
}

module.exports = insertionSort;
