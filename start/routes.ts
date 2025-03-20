/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const JogadoresController = () => import('../app/controllers/jogadores_controller.js')
import Player from '../app/models/player.js'


   router.get('/rindex', [JogadoresController, 'index'])
   router.post('/rstore', [JogadoresController, 'store'])


  router.get('/jogadores/:id', [JogadoresController, 'show']) // Buscar um jogador pelo ID
  router.put('/jogadores/:id', [JogadoresController, 'update']) // Atualizar um jogador
  router.delete('/jogadores/:id', [JogadoresController, 'destroy']) // Excluir um jogador


  router.get('/test-jogadores', async () => {
    const jogadores = await Player.all() // Pega todos os registros da tabela Jogadores
    return jogadores
  })

router.get('/', async () => { return 'Hello, world!' })


 


