网站由网页组成，超链接，
web app mobile native app(ios,andriod)
多页应用 很多页面 会跳转 重新刷新页面
缺点
- 用户体验极差，

    每次点链接，都要等待http请求及响应
    
    整个页面的刷新，页面白一下，如果传输时间大于0.5s，会看到明显的白屏，
- 相同的html 片段重复下载 

1. preventDeafult a
2. href attribute
3. jqurry ajax 动态得到html内容
4. p content img src

    $('').content('')
    
    $('').src('')

SPA Singele Page Application 
单页应用

- 页面的状态 可以对应 路由

    SPA 解决了用户的体验问题，但却带来了极其严重的问题，浏览记录没了

    history

    如何为每个状态改变，（路由状态），产生一个 url（路由），并且生成一次浏览历史记录

    让SPA的访问，更像传统的请求，location 浏览器地址栏上的操作可以使用了

- 一个页面对应多个页面状态，每个页面状态都会有一个router 路由（地址，state数据），又会用来对应的一个组件，

    vue 单页应用开发，由router响应 匹配相应的组件显示，在一直组件化的过程