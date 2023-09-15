function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */

	for (let i = 0; i < array.length; i++){
		if(array[i+1] < array[i]){
			// console.log(array);
			swap(array, i+1, i);
			for(let a = 0; a < i; a++){
				if(array[i-a] < array[i-a-1]){
					swap(array, i-a, i-a-1);
				}
			}	
		}	
	}
	return array;
}
function swap(array, smallIndex, bigIndex){
	let small = array[smallIndex];
	let big = array[bigIndex];
	array[smallIndex] = big;
	array[bigIndex] = small;
}

// let arr = [8, 2, 3, 7, 5, 10]
// console.log("Unsorted Array: " + arr);
// let sortedArr = insertionSort(arr);
// console.log("Sorted Array: " + sortedArr);

module.exports = insertionSort;