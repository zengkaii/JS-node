const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
// const index = fs.readFileSync('./index.html');
// 创建一个Web 服务器
const server = http.createServer((req, res) => {
    // 浏览器能支持自动解压ungzip?
    // console.log(req.headers['accept-encoding']);
    data = fs.ReadStream('./a.txt.gz');
    if(req.headers['accept-encoding'].indexOf('gzip') !=-1){
        gzip = zlib.createGzip();
        res.writeHead(200,{
            'Content-Encoding':'gzip',
            'Content-Type':'text/plain;charset=utf-8',

        })
        fs.createReadStream('./a.txt').pipe(gzip).pipe(res);
    } else {
        res.writeHead(200,{
            'Content-Type':'text/plain;charset=utf-8',

        })
        fs.createReadStream('./a.txt').pipe(res);
        // res.end(req.headers['accept-encoding']);
    }
    
});

server.listen(8082);