// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function findLowest(array){
    let lowest = array[0];

    for(let i of array){
        if(i<lowest){
            lowest = i;
        }
    }
    return lowest;
}

const heights2 = [167, 190, 120, 165, 137, 100];
console.log(findLowest(heights2));