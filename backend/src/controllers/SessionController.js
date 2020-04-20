const connection = require('../database/connection');

module.exports = {
    async create (require, response) {
        const { email, senha } = require.body;
        
        const usuario = await connection('usuarios')
          .where({
              'email': email,
              'senha': senha
          })
          .select('nome', 'email')
          .first()
        
        try {
            console.log('senha', senha);
            // if(senha) {

            // }

            if(!usuario) {
                return response.status(400).json({ error: 'Usuário não encontrado' });
            }
            console.log(usuario)
            
            } catch(err) {
                console.log(err);
            }
            
                
               await response.json(usuario);
    }
}
