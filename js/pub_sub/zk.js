// public 多个 subscriber
// pub-sub
// 发布者
let zk = {};
// 订阅者
zk.peopleList = [];
// 2018年10月1日XXX大事
// 作何反应
zk.addlisten = function(fn){

    this.peopleList.push(fn);
    console.log('执行了addlisten');
};
zk.trigger = function(){
    // ?消息发出后，所有的订阅者作出反应 
    console.log('执行了trigger');
    for (var i = 0, fn;fn = this.peopleList[i++];){
        fn.apply(this,arguments);
        // console.log(arguments);
        // console.log(this);
        // this.peopleList.push();
    }
    // console.log(this)
   
}
zk.addlisten(function(msg){
    console.log('收到了你' + msg + '的信息，决定给红包');
});
zk.addlisten(function(msg){
    console.log('收到了你' + msg + '的信息，打飞机来');
});
zk.addlisten(function(msg){
    console.log(msg);
    console.log('收到了你' + msg + '的信息，呵呵哒');
});
zk.trigger('XXX大事');
// zk.trigger('XXXXXXX');