// es6 class关键字新增
class RandomHongbao{
    constructor(num){
        // check
        this.num = this.getNum(num);
        // 得到一个确定的小数的位数
        // 120 120.1 120.11
        try{
            // 数值的小数长度
            this.multiple =this.num.toString().split('.')[1].length;
        }catch(e){
            this.multiple = 0;
        }
        // 1.23=>123
        // 将小数放大指数倍成整数
        this.calcNum = this.num * 
        Math.pow(10,this.multiple);
        // console.log(this.num.toString().split('.'));
        // console.log(this.num);

    }
    getNum(num,defaultNum = 0){
        return this.isNumber(num)?num:defaultNum;

    }
    isNumber(num){
        // 排除各种可能出现的问题
        let number = +num;
        // +num(number化)
        if ((number-num)!==0){
            return false;
        }
        if(number===num){
            return true;
        }
        // console.log(typeof number);
        if(typeof num ==='string'){
            return false;
        }
        return true;
    }
    split(n,precision){
        // this.num 原金额
        // this.calcNum 如果小树，就放大的金额
        // 偷偷的先等分一下
        // n 人数 []{n} this.calcNum/n 
        let arr = this.average(n,precision);
        console.log(arr);
        // 随机性 三人同行为一单位 产生几次随机 把钱分给左右的人 环 数据结构 链表
        let arrResult = arr;
        for (let i = 0;i<arr.length;i++){
            let item = arr[i];
            //分出去多少
            let num = Math.floor(Math.random()*item);
            let numLeft =Math.floor( Math.random()*num);
            let numRight=num-numLeft;
            arrResult[i] -= num;
            let iLeft=i ===0?(arr.length-1) : i-1;
            let iRight=i ===(arr.length-1) ?0 : i+1;

            arrResult[iLeft] +=numLeft;
            arrResult[iRight] +=numRight;

        }
        return arrResult;

        // var average=this.calcNum/n;
    }
    average(n,precision){
        //整数
        let avg = Math.floor(this.calcNum/n);
        //余数
        let rest = this.calcNum % n;
        console.log(rest);
        let result =  Array(n).fill(avg);
        //多余的钱填充间隔 多少人发一次1
        let gap = Math.round((n-rest)/rest)+1;
        let index=0;
        while(rest> 0){
            index = (--rest)*gap;//那个位置多一元
            result[index>= n?(n-1):index]++;
        }
        // 怎么讲剩下的rest评分的数组给掉。26 25
        // 把多的钱一元一元的分 rest--while循坏
        // 放大后分的平均值 回到放大前，
        // 放大完的所有值，回到放大前 金钱没问题
        return result.map((item) => {
            return(item/Math.pow(10,this.multiple));
        })
    }
}
// 200 => 总金额
// split 26 人数 红包金额的精确度 2
const hongbao = new RandomHongbao(200);
console.log(hongbao.split(10,0));

