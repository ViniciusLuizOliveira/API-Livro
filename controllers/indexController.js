const { response } = require("express");
var Livro = require("../models/livro");

module.exports = {
    async getAll(req, res) {
        try {
            let livros = await Livro.find();
            return res.json(livros);
        } catch (ex) {
            return res.status(500).json({ message: ex.message });
        }
    },

    async getById(req, res) {
        let livro = req.livro;
        return res.json(livro);
    },

    async createLivro(req, res) {
        let livro = new Livro(
            ({ titulo, autor, anoDePublicacao, ISBN } = req.body)
        );
        try {
            let novoLivro = await livro.save();
            return res.status(201).json(novoLivro);
        } catch (ex) {
            return res.status(400).json({ message: ex.message });
        }
    },

    async updateLivro(req, res) {
        let livro = req.livro;
        let { titulo, autor, anoDePublicacao, ISBN } = req.body;

        if (titulo != null) {
            livro.titulo = titulo;
        }
        if (autor != null) {
            livro.autor = autor;
        }
        if (anoDePublicacao != null) {
            livro.anoDePublicacao = anoDePublicacao;
        }
        if (ISBN != null) {
            livro.ISBN = ISBN;
        }

        try {
            let novoLivro = await livro.save();
            return res.json(novoLivro);
        } catch (ex) {
            return res.status(500).json({ message: ex.message });
        }
    },

    async deleteLivro(req, res) {
        let livro = req.livro;
        try {
            await livro.remove();
            return res.json(livro);
        } catch (ex) {
            return res.status(500).json({ message: ex.message });
        }
    },

    async getLivro(req, res, next) {
        let { id } = req.params;
        let livro;
        try {
            livro = await Livro.findById(id);
            if (livro == null) {
                return res
                    .status(404)
                    .json({ message: "livro não encontrado" });
            }
        } catch (ex) {
            return res.status(500).json({ message: ex.message });
        }
        req.livro = livro;
        next();
    },
};
