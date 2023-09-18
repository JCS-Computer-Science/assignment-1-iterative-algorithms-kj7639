function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	for(let a = 0; a < array.length; a++){
		let smallest;
		let smallestIndex;
		for(let i = a; i < array.length; i++){
			if(i == a){
				smallest = array[i];
				smallestIndex = i;

			}else if(array[i] < smallest){
				smallest = array[i];
				smallestIndex = i;

			}
		}
		
		// console.log("Smallest element: " + smallest + " Index: " + smallestIndex);
		let swap = array[a];
		array[a] = smallest;
		array[smallestIndex] = swap;

	}
	return array;
}

// let arr = [3, 6, 1, 9, 14, 3];
// let sortedArr = selectionSort(arr);
// console.log("Sorted array: " + sortedArr);

module.exports = selectionSort;
