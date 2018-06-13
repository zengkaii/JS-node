
// 节流thorttle,在规定时间内只执行一次，先执行
// debounce 防抖都会解决，在规定时间执行一次，后执行
// 高频事件而来 scroll mousewheel mousemover
// mousemove touchmove onresize
const utils ={
    // 帮忙method的执行次数在规定时间内只有一次
    // method执行时,函数内的this指向 一定要指向PureFullPage
    // this.container
    throttle(method,context,delay){
        // args?
        // 返回的函数就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function(...args){
            // method this 指向window
            // args ? event对象
            // 执行时，上下文环境要跟以前一样
            if (!wait) {
                method.apply(context,args);
                wait = true;
                setTimeout(()=>{
                wait=false
                },delay);
            }
            
            
        }
    },
    debounce(method,context,event,delay){
        // window.resize 不要急，等一下再执行
        clearTimeout(context.tId)
        context.tId=setTimeout(()=>{
             method.call(context,event);
        },delay)
       
    },
    getWheelDelta(event){
        // console.log(event);
        if(event.wheelDelta) {
            this.getWheelDelta = event =>event.wheelDelta;
            return event.wheelDelta;
        }
    
    }
    
}