function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let middle = Math.floor(array.length/2);
	console.log("Array: " + array);
	let isNotRight = [];
	let isNotLeft  = [];
	for(let i = 0; i < 10; i++){
		console.log("Checking: " + middle);
		if(array.middle == searchTerm){
			return middle;
		}else{
			if(middle > searchTerm){
				for(let a = middle; a < array.length; a++){
					isNotRight.push(a);
				}
				console.log("Ruled out (R): " + isNotRight);
				// middle = Math.floor(middle/2);
				
			}else if(middle < searchTerm){
				for(let a = 0; a <= middle; a++){
					isNotLeft.push(a);
				}
				console.log("Ruled out (L): " + isNotLeft);
				// middle = Math.floor((middle/2) + 2);

			}
			if(isNotRight.length == 0 ){
				
			}else if(isNotLeft.length == 0){

			}else{
				middle = isNotRight[0] - isNotLeft[isNotLeft.length] - 1;
			}
		}		
	}
}
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let searchFor = 3;
let index = binarySearch(arr, searchFor);
console.log("Index: " + index);

// module.exports = binarySearch;