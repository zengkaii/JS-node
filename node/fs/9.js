const fs = require('fs');
const path =require('path');
const getFilesInDir = function(dir) {
    // console.log(path.resolve(dir));
    const result = [path.resolve(dir)];
    const files = fs.readdirSync(dir, 'utf8');
    // console.log(files);
    files.forEach(file => {
        // console.log(file);
        file = path.resolve(dir, file);
        // console.log(file);
        const stats = fs.statSync(file);
        // console.log(stats.isFile());
        if (stats.isFile()){
            // console.log(file)
            result.push(file);

        }else if (stats.isDirectory()){
            result.concat(getFilesInDir(file));
        }
        // console.log(result);
    })
    console.log(result);

    return result;
    
}
const files = getFilesInDir('./txt')