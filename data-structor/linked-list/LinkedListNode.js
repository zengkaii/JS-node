export default class LinkedListNode {
    // data collections data node
    // linked 
    // list 数据集合
    constructor (value, next = null) {
        this.value = value;
        this.next = next;  //指向下一个结点的位置
    }
    toString (callback) {
        return callback? callback(this.value):`${this.value}`; //返回callback
    }
}



// 链表结点
// [数组] 内存分配给我们一定数量的空间 
// 存储空间的连续性问题 灵活性不够 指针
// a[10] = [1,2,3,4,5,6,7,8];
// 1 101 99 5 a  b c


