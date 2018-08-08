// function Binary_search (arr, key) {
//     var low = 0;
//  high = arr.length - 1;
//     // let  i = 0;
//     while ( low < high ) {
//         // console.log(3333)
//         var mid = parseInt((high + low) / 2);
//         // console.log(mid)
//         if (key == arr[mid]) {
//             // console.log(1111)
//             return mid
//         } else if (key > arr[mid]) {
//             low = mid +1
//         } else if (key < arr[mid]) {
//             high = mid -1;
//         } else {
//             // console.log(2222)
//             return -1
//         }
//         // return mid
//     }
// }
// var arr = [1,2,3,4,5,6,7,8,9,10,11,12,23,44,86]
// var result = Binary_search(arr, 10);
// console.log(result)


function binary_search(arr,key) {
    var low = 0,
    high = arr.length - 1;

    while(low < high) {
        var mid = parseInt((high + low) / 2);
        // console.log(mid)
        if(key == arr[mid]) {
            return mid;
        } else if (key > arr[mid]) {
            low = mid + 1;
        } else if (key < arr[mid]) {
            high = mid - 1;
        } else {
            return -1;
        }
    }
}
var arr = [1,2,3,4,5,6,7,8,10,11,12,23,44,86];
var result = binary_search(arr,10);
console.log(result);


// function Binary_search (arr, low, high, key) {
//     if (low > high) {
//         return -1
//     }
//     var mid = Math.floor((high + low)/2);
//     if (arr[mid] == key) {
//         return mid
//     } else if (arr[mid] > key) {
//         high = mid -1;
//         return Binary_search(arr, low, high, key)
//     } else if (arr[mid] < key) {
//         low = mid +1;  
//         return Binary_search(arr, low, high, key)
//     }
// }
// var arr = [1,2,3,4,5,6,7,8,9,10,11,23,44,86];
// var result = Binary_search(arr, 0 ,13 ,10)
// console.log(result)