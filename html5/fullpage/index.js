class PureFullPage{
    constructor(options){
        // 属性定义
        // 1. 手动计算page的高度
        // #pureFullPage的高度？
        const defaultOptions={
            isShowNav:true,
            delay:1000,
            // 每次trunpage callback
            definePages:()=>{

            }
            
        }
        this.options=Object.assign(defaultOptions,options);
        console.log(this.options);
        this.container = document.getElementById('pureFullPage');
        this.DELAY=this.options.delay || 1000;
        this.currentPosition=0;
        this.viewHeight =document.documentElement.clientHeight;

        // console.log(this.viewHeight);
        this.init();
    }
    init(){
        this.container.style.height = `${this.viewHeight}px`;
        // mousewheel 节流
        // this.scrollMouse 当前的方法 负责滚动 执行多次
        // throttle 在规定时间里只执行一次
        // 重新返回一个函数，handleMouseWheel,闭包，
        // 将this.scrollMouse 封装到内部
        // this , 函数执行的context
        // 1000 delay 推迟执行
        const handleMouseWheel = utils.throttle(this.scrollMouse,this,this.DELAY);
        // console.log(navigator.userAgent);
        if(navigator.userAgent.toLowerCase().indexOf('firefox') === -1){
            document.addEventListener('mousewheel',handleMouseWheel,false);
        }else{
            document.addEventListener('DOMMouseScroll',function(){

            },false);
        }       
        // 事件监听 浏览器嗅探
        // mousewheel
        // firefox DomMouseScroll
        // 事件处理函数交由对象的方法来执行
        window.addEventListener('resize',this.handleWindowResize.bind(this),false);
        // console.log(this);
    }

    handleWindowResize(event){
        // console.log(this)
        // 对象的方法  
        // this 代表对象

        utils.debounce(this.getNewPosition,this,event,this.DELAY);
    }
    getNewPosition(){
        console.log('debounce');
        this.viewHeight=document.documentElement.clientHeight;
        this.container.style.height=`${this.viewHeight}px`;
    }

    // 滚轮事件处理函数
    scrollMouse(event){
        const delta =utils.getWheelDelta(event);
        if(delta>0){
            this.goUp();
        }else{
            this.goDown();
        }
    }
    goUp(){
        // if(this.currentPosition)
        console.log(this.currentPosition);
        // if()
        if(this.currentPosition>=0){
            return
        }
        this.currentPosition += this.viewHeight;

        this.container.style.top = `${this.currentPosition}px`;
    }
    goDown(){
        if(this.currentPosition<=-this.viewHeight*2){
            return
        }
        console.log(this.currentPosition);
        this.currentPosition -= this.viewHeight;
        this.container.style.top = `${this.currentPosition}px`;
    }


}