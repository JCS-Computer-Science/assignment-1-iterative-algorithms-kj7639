function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */
    while(true){
        let swapped = false
        for(let i = 0; i < array.length; i++){
            if(array[i] > array[i+1]){
                let big = array[i];
                let small = array[i+1];
                array[i] = small;
                array[i+1] = big
                swapped = true;
            }
        }
        if(swapped == false){
            return array;
        }
    }

}

module.exports = bubbleSort;
