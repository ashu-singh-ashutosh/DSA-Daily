// you have to find the largest from the array.

let array=[23,45,-23,67,45,90];
function LargestElement(arr){
    let largest=-Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i]; 
        }
    }
    return largest;
}
let result=LargestElement(array);
console.log(result);