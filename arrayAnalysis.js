const analyze = (array) => {
    //Takes in an array of numbers and returns data
    //Length
    const length = array.length;
    
    //Average
    let average = 0;
    array.forEach(number => {
        average = average + number;
    });

    average = average/array.length;

    //Min
    array.sort()
    const min = array[0]
    
    //Max
    const max = array[length-1];

    //return statement
    return {average, min, max, length}
}

export { analyze }