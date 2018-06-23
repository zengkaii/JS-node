const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
// readfile  一边读，写入另一个文件
// Stream 流
const inFile = fs.createReadStream('./a.txt');
const outFile = fs.createWriteStream('./a.txt.gz');
inFile.pipe(gzip).pipe(outFile);