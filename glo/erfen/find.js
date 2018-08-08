// 有一个二维数组、
// 每一行从左到右递增
// 从上到下递增
// 完成一个函数, 判断是否有这个数
// target 10
// [[1,2,3,4],[5,9,10,11],[13,20,21,23]]
/*****
 * 
 * 
 * 
 */
function Find (target, arr) {
    let i = 0; //row
    let j = arr[i].length - 1;
    while (i < arr.length && j >= 0) {
        if (arr[i][j] < target) {
            i++;
        } else if (arr[i][j] > target) {
            j--;
        } else {
            return true;
        }
    }
    return false;
}
console.log(Find(15,[
    [1, 2, 3, 4],
    [5, 9, 10, 11],
    [13, 20, 21, 23]
]))