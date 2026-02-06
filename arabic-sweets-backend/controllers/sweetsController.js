const connection = require('../data/arabicsweetsDb');


const index = ((req, res) => {

    const indexSql = `SELECT * FROM products`

    connection.query(indexSql, (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` })

        const sweet = result.map((r) => {
            return {
                ...r,
                image_url: req.imagePath + r.image_url
            }
        })

        res.json(sweet)
    })
})

const show = ((req, res) => {

    const id = Number(req.params.id)
    const showSql = `SELECT * FROM products WHERE id = ?`

    connection.query(showSql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` })

        if (result.length === 0) { return res.status(404).json({ error: 'Product not found' }); }

        const sweet = result.map((r) => {
            return {
                ...r,
                image_url: req.imagePath + r.image_url
            }
        })


        res.json(sweet[0])
    })

})

module.exports = {
    index,
    show

}
