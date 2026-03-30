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

const addToCart = ((req, res) => {

    const id = Number(req.params.id)
    const addSql = `INSERT INTO cart_items ( product_id, quantity ) VALUES ( ? ,1 )`
    const showSql = `SELECT * FROM arabicsweets_db.cart_items WHERE product_id = ?`
    const updateSql = `UPDATE cart_items SET quantity = quantity + 1 WHERE product_id = ?`

    connection.query(showSql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` })

        if (result.length === 0) {
            connection.query(addSql, [id], (err) => {
                if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                res.status(200).send("Item added to cart!")
            })
        }
        else {
            connection.query(updateSql, [id], (err) => {
                if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                res.status(200).send("Quantity updated!")
            })
        }


    })
})

const updateRemoveFromCart = ((req, res) => {
    const id = Number(req.params.id)
    const showSql = `SELECT * FROM arabicsweets_db.cart_items WHERE product_id = ?`
    const updateSql = `UPDATE cart_items SET quantity = quantity - 1 WHERE product_id = ?`
    const deleteSql = `DELETE FROM cart_items WHERE product_id = ?`

    connection.query(showSql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` })

        if (result.length === 0) {
            return res.status(404).send('Item not found')

        }

        if (result[0].quantity > 1) {
            connection.query(updateSql, [id], (err) => {
                if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                res.status(200).send("Quantity updated!")
            })
        }
        else {
            connection.query(deleteSql, [id], (err,) => {
                if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                res.status(200).send("Item deleted from cart!")
            })
        }
    })
})

const createOrder = ((req, res) => {
    const createOrderSql = `INSERT INTO orders (total) VALUES (0)`
    const insertOrderItems = `INSERT INTO order_items(order_id, product_id, quantity, price) SELECT ?, cart_items.product_id, cart_items.quantity, products.price FROM cart_items JOIN products ON products.id = cart_items.product_id`
    const sumSql = `SELECT sum(cart_items.quantity * products.price) AS total FROM cart_items JOIN products ON cart_items.product_id = products.id`
    const setTotalSql = `UPDATE orders SET total = ? WHERE id = ?`

    connection.query(createOrderSql, (err, result) => {
        if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
        const orderId = result.insertId
        connection.query(insertOrderItems, [orderId], (err) => {
            if (err) return res.status(500).json({ error: `Database query failed: ${err}` })

            connection.query(sumSql, (err, result) => {
                if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                const total = result[0].total

                connection.query(setTotalSql, [total, orderId], (err) => {
                    if (err) return res.status(500).json({ error: `Database query failed: ${err}` })
                    res.send('Order created!')
                })
            })

        })

    })
})

module.exports = {
    index,
    show,
    addToCart,
    updateRemoveFromCart,
    createOrder

}
