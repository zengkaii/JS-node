const readline = require('readline');
// process 进程 stdin 输入 stdout 输出
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('please input a word:',function (answer) {
    console.log('You has entered [%s]', answer.toUpperCase());
    rl.close();
})
// rl.on('line', (line) => {
//     console.log(`接收到${line}`)
//     rl.close();
// })
