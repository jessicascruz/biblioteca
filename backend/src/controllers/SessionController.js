const connection = require('../database/connection');

module.exports = {
    async create (require, response) {
        console.log('entrou')
        const { email, senha } = require.body;
        console.log('chegou no back', require.body)

                
            const usuario = await connection('usuarios')
              .select('nome', 'email', 'id')
              .where('senha', senha)
              .where('email', email)
              .first()
            
            if(!usuario) {
                return response.status(400).json({ error: 'Usuário não encontrado' });
            }

            // return response.status(201).json({ message: 'Login efetuado com sucesso' });
            return response.json(usuario);

    }
}
