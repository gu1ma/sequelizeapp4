const express = require('express');
const app = express();

const PORT = 3000;

const db = require('./models');

app.get('/produtos', async (req, res) => {
    const produtos = await db.produtos.findAll({
        include: [
            { association: 'categorias' }
        ]
    });

    return  res.send({ produtos });
});

app.listen(PORT, () => console.log('server running on port '+PORT));