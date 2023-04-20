const childProcess = require('child_process')
const path = require('path')

const filePath = {
    vue2: path.join(__dirname, '../vue2'),
    vue3: path.join(__dirname, '../vue3'),
    react15: path.join(__dirname, '../react15'),
    react16: path.join(__dirname, '../react16'),
    service: path.join(__dirname, '../service'),
}

function runChild() {
    Object.keys(filePath).forEach(item => {
        childProcess.spawn(`cd ${item} && npm start`, {
            stdio: 'inherit',
            shell: true,
        })
    })
}

runChild()