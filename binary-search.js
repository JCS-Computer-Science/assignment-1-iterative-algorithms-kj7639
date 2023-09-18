function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let middle = Math.floor(array.length/2);
	let isNotRight = -1;
	let isNotLeft = -1;
	while(true){
		// console.log("Checking index: " + middle);
		if(array[middle] == searchTerm){
			return middle;
		}else{
			if(array[middle] > searchTerm){
				if(isNotRight == -1 || middle < isNotRight){
					isNotRight = middle;
					// console.log("R: " + middle);
				}
				// console.log("Ruled out (R): " + isNotRight);
				
			}else if(array[middle] < searchTerm){
					if(isNotLeft == -1 || middle > isNotLeft){
						isNotLeft = middle;
						// console.log("L: " + middle);
				}
				// console.log("Ruled out (L): " + isNotLeft);

			}
			if(isNotRight == -1){
				middle = Math.floor(array.length/2) + Math.floor(isNotLeft/2);
			}else if(isNotLeft == -1){
				middle = Math.floor(isNotRight/2);
			}else{
				middle = Math.floor(((isNotRight - isNotLeft))/2) + isNotLeft;
			}
			if(isNotLeft == middle){
				middle++;
			}
		}		
	}
}

// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let searchFor = 12;
// let index = binarySearch(arr, searchFor);
// console.log("Index: " + index);

module.exports = binarySearch;