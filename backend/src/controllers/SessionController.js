const connection = require('../database/connection');

module.exports = {
    async create (require, response) {
        const { email, senha } = require.body;

                
            const usuario = await connection('usuarios')
              .select('nome', 'foto', 'id')
              .where('senha', senha)
              .where('email', email)
              .first()
            
            if(!usuario) {
                return response.json({ error: 'Usuário não encontrado' });
            }
            // return response.status(201).json({ message: 'Login efetuado com sucesso' });
            return response.json(usuario);

    }
}
