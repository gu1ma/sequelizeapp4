const express = require('express');
const app = express();

const PORT = 3000;

const db = require('./models');

app.use(express.json());

app.get('/produtos', async (req, res) => {
    const produtos = await db.produtos.findAll({
        include: [
            { association: 'categorias' }
        ]
    });

    return  res.send(produtos);
});

app.get('/produtos/supermercados/', async (req, res) => {
    const produtos = await db.produtos.findAll({
        include: [
            { association: 'supermercados' }
        ]
    });

    return  res.send(produtos);
})

app.get('/supermercados/produtos', async (req, res) => {
    const supermercados = await db.supermercados.findAll({
        include: [
            { association: 'produtos' }
        ]
    });

    return  res.send(supermercados);
});

app.post('/supermercados/produto/:supermercadoId', async (req, res) => {
    const { supermercadoId } = req.params;
    const { nome, descricao, categoriaId } = req.body;

    //
    try {
        const supermercado = await db.supermercados.findByPk(supermercadoId);
        if(!supermercado) {
            return res.status(400).send('Esse mercado não existe!');
        }

        const [ novoProduto ] = db.produtos.findOrCreate({
            where: { nome, descricao, categoriaId }
        });

        console.log('supermercado.addProduto', supermercado.addProduto);
        await supermercado.addProduto(novoProduto);

        return res.send(novoProduto);
    } catch(e) {
        return res.send(e.message);
    }
    
});

app.get('/supermercados/produtos', async (req, res) => {
    try {
        const supermercados = await db.supermercados.findAll({
            include: [
                { association: 'produto' }
            ]
        });
    
        return res.send(supermercados);
    } catch (e) {
        console.log('ERROR', e.message);
    }
});

//
app.listen(PORT, () => console.log('server running on port '+PORT));