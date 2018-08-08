// 斐波那契数列
// 1,1,2,3,5,8,13,21,34,55,89
// f(n) = f(n-1) + f(n-2)

// 递归次数太多 通过for 或者 while 来替代递归
// 递归使用时， 注意优化
// let count = 0;
// function Fabo (n) {
//     count++;
//     if (n == 1 || n == 2) {
//         return 1;
//     }
//     return Fabo(n-1) + Fabo(n-2);
// }
// console.log(Fabo(20), count)

let count = 0
function Fabo (n) {
    let cache = {};
    function _Fabo(n) {
        if (cache[n]) {
            return cache[n]
        };
        count ++;
        if (n == 1 || n ==2) {
            return 1
        }
        let prev = _Fabo(n-1);
        cache[n-1] = prev
        let next = _Fabo(n-2);
        cache[n-2] = next;
        return prev + next
    }
    return _Fabo(n)
}
console.log(Fabo(20), count)