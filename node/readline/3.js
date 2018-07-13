const readline = require('readline');

const completer = (line) => {
    // console.log(line);
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];
    // const hits = completer.filter((c) => c.startWith(line))
    if (line.length < command.length ) {
        // hits = subCommands.filter((c) => c.startsWith(line))
        // return [hits.length?hits:subCommands,line]
        return [command.indexOf(line) === 0 ? [command]:[],line]
    }
    // 1.filter 的条件字符串 repalce 将npm 干掉
    // 2.commands 
    let hints = subCommands.filter(subCommand => {
        const lineTrippedCommand = line.replace(command,'').trim();
        return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) === 0;
    });
    if(hints.length === 1) {
        hints = hints.map(function(hit) {
            return [command, hit].join(' ');
        })
    }
    // 匹配到多个 ？ 或者没有匹配到
    return [hints.length ? hints :subCommands,line]
}
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    completer:completer
});
rl.prompt();
