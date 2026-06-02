// to find the second largest number in an array
let arr=[45,4,45,3,2,7];
function SecondLargest(arr){
    let largest=-Infinity;
    let secondLarge=-Infinity;
    for(i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLarge=largest;
            largest=arr[i];
        }
        else if(arr[i]>secondLarge && arr[i]!=largest){
            secondLarge=arr[i];
        }
    }
    return secondLarge;
}
let result=SecondLargest(arr);
console.log(result);