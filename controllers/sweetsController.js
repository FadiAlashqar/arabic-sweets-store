const connection = require('../data/arabicsweetsDb');


const index = ((req, res) => {
    console.log('Sweets list')
})

const show = ((req, res) => {
    console.log('Sweet detail')
})


module.exports = {
    index,
    show

}
