const fs = require('fs');
let data;
try{
    data = fs.readFileSync('./f2.txt','utf8');
    console.log('文件读取完成');
    console.log('文件内容是：' + data);
}
catch (error){
    console.log('文件读取出错' + error.message);
}
