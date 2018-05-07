/*
 * author zengkai
 * date 2018-5-4
 */
// 服务于任何图片元素，img 幕后，再将origin_src 设置过去
var LazyLoadImage=(function(){
    // 变量的冒泡查找
    return {
        setSrc:function(ele){
            // console.log('loading');
            const url = ele.getAttribute('origin_src') ?
                        ele.getAttribute('origin_src') :'';
            if (!url) return;
            const oImg=document.createElement('img');
            // 不会影响页面，none 会离开文档流
            // opacity:0这个会撑长页面
            oImg.style.display='none';

            document.body.appendChild(oImg);
            // 注册事件
            // addEventListener 新的
            // 旧的写法

            // 当设置了图片的src之后，就会启动http请求，
            // 当图片下载完成后，onload注册的事件回调
            // 函数就会被执行
            // 异步,同步
            oImg.onload=function(){
                // 不会执行，
                // 后执行
                console.log('下载完成');
                ele.src=url;
                document.body.removeChild(this);
                // ele.parentNode
            }
            // 先执行
            oImg.src=url;
            console.log('设置src');
        }
    }
})();
