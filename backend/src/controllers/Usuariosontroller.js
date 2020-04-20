const connection = require('../database/connection');

module.exports = {

    async index (request, response) {
        const usuarios = await connection('usuarios').select('*');
        
        return response.json(usuarios);
    },

    // Lembrar de pegar data atual, verificar se email já existe antes do insert
    async create (request, response) {
        const { nome, email, foto, senha, data_cadastro } = request.body;
    
        await connection('usuarios').insert({
            nome, 
            email, 
            foto, 
            senha,
            data_cadastro
        })
    
        return response.json();
    }
}

