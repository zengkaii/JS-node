// COMMONJS require NODE 内置支持的Js 模块化方案
// es6 module
// sea.js
const fs = require('fs');
let data;
const promise = new Promise((resolve ,reject) => {
    fs.readFile('./f1.txt','utf8',(err, data) => {

    if (err) {
       reject(err);
    }else {
        resolve(data);
        console.log(data);
    }
   
    });
});
promise.then(data => {
    console.log('读取完成');
}).catch(e =>{
    console.log(e);
})
