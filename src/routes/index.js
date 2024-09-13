const express = require('express');
const router = new express.Router();
const controller = require('../controllers/produto-controller.js');

// Rota principal para a API
router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'API',
        version: '0.0.1'
    });
});

// Rota GET para listar produtos
router.get('/produtos', async(req, res) => {
    const data = await controller.get(req, res);
    res.status(200).send(data);
});

// Rota POST para criar um produto
router.post('/produtos', (req, res) => {
    const { nome, preco, tipoTecido } = req.body;

    if (!nome || !preco || !tipoTecido) {
        return res.status(400).send({ mensagem: 'Bad Request: Informações faltando.' });
    }

    return controller.post(req, res);
});

// Rota PUT para atualizar um produto
router.put('/produtos/:id', (req, res) => {
    const { nome, preco, tipoTecido } = req.body;

    if (!nome || !preco || !tipoTecido) {
        return res.status(400).send({ mensagem: 'Bad Request: Informações faltando.' });
    }

    return controller.put(req, res);
});

module.exports = router;