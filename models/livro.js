var mongoose = require("mongoose");

var LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    autor: {
        type: String,
        required: true,
    },
    anoDePublicacao: {
        type: Date,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Livro", LivroSchema);
