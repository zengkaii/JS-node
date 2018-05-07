//参数不限
function sum(...args){
    // this 自动生成， 函数执行的方式来决定
    // arguments 所有的参数
    console.log(arguments.length);
    // 类数组 ，js 生成的怪胎
    // Array.prototype.forEach

    // let total=0;
    // args.forEach(i => {
    //     total += i;
    // })
    // return total;
    // let total=0;
    // for(let i=0;i<arguments.length;i++) {
    //     total += arguments[i];
    // }
    let total=0;
    Array.from(arguments).forEach(i => {
        total += i;
    })

    // let total=0;
    // arguments.forEach(i => {
    //     total +=i;
    // })
    return total;

}
// sum(1,2,3,4,5,6,7,8,9,10);
console.log(sum(1,2,3,4,5,6,7,8,9,10));