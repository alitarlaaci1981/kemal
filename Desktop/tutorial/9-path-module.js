const path= require('path')

console.log(path.sep)

const filePaath = path.join('/content/','subfolder','test.txt')
console.log(filePaath)

const base = path.basename(filePaath)
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute)