// function bubbleSort(arr){
//       function swap(arr,i,j){
//           let temp =arr[i]
//           arr[i] = arr[j];
//           arr[j]= temp;
//       }
//       for(let i =arr.length;i>0;i--){
//           for(let j=0;j<i-1;j++){
//               if(arr[j]>arr[j+1]){
//               swap(arr,j,j+1)
//           }
//           }

//       }
//       return arr;

// }

//optimize sollution
function bubbleSort(arr) {
  let noSwap = false
  function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    noSwap = false
  }
  for (let i = arr.length; i > 0; i--) {
    noSwap = true

    for (let j = 0; j < i - 1; j++) {
      console.log(arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
    if (noSwap) {
      break
    }
  }
  return arr
}
bubbleSort([2, 1, 3, 5, 4, 10, 6, 9, 7, 8])

//compare two elements and max element should go top that is bubble sort
//O(n^2) timecomplexity