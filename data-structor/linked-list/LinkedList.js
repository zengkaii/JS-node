// 链表
import LinkedListNode from './LinkedListNode';
// 形成链表? 结点链起来?
// 数据集合从开始到结束显示出来 
// [] next
// head
//     next
//     .....
// tail 尾


export default class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
        append (value) {
        // this.head.next = node
        const newNode = new LinkedListNode(value)
        // {value, next}
        // 1. 空的
        // 2. 非空 tail .next null
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        return this;
    }
    prepend (value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;
        if(!this.tail) {
            this.tail = newNode;
        }
        return this;
    }
    delete (value) {
        // const newNode = new LinkedListNode()
        if (!this.head) {
            return null;
        }
        let deleteNode = null;
        // 头结点是不是要删除的
        while (this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while(currentNode.next) {
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = deleteNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deleteNode;

    }
    find ({ value = undefined, callback = undefined}) {
        if (!this.head) {
            return null
        }
        let currentNode = this.head;
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null
    }

    toArray () { //形象地把一个数据结构变成一个数组
        const nodes = []; //
        let currentNode = this.head; 
        while (currentNode) { //当这个结点存在的时候
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    toString(callback) { //返回链表上每个结点的value                将数组变成字符串
        return this.toArray().map(node => node.toString(callback)).toString() //toArray():将链表变成一个数组或者一个集合, map(): 将一个链表结点数组变成值的数组
    } 
}
