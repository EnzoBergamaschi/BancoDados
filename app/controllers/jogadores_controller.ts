import type { HttpContext } from '@adonisjs/core/http'
import player from '../models/player.js'
import { JogadorValidator } from '../validators/post.js'

export default class JogadorController {
  // Criar um jogador
  public async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(JogadorValidator) // Validação com Vine
    const jogador = await player.create(data) // Criar jogador no banco
    return response.created(jogador) // Retorna status 201 (Created)
  }

  // Listar todos os jogadores
  public async index({ response }: HttpContext) {
    const jogadores = await player.all()
    return response.ok(jogadores) // Retorna status 200 (OK)
  }

  // Mostrar um único jogador por ID
  public async show({ params, response }: HttpContext) {
    const jogador = await player.find(params.id) // Buscar pelo ID
    if (!jogador) {
      return response.notFound({ message: 'Jogador não encontrado' }) // Status 404
    }
    return response.ok(jogador) // Retorna o jogador encontrado
  }

  // Atualizar jogador
  public async update({ params, request, response }: HttpContext) {
    const jogador = await player.find(params.id)
    if (!jogador) {
      return response.notFound({ message: 'Jogador não encontrado' })
    }

    const data = await request.validateUsing(JogadorValidator) // Validação
    jogador.merge(data) // Atualiza os dados do jogador
    await jogador.save() // Salva no banco

    return response.ok(jogador) // Retorna o jogador atualizado
  }

  // Excluir jogador
  public async destroy({ params, response }: HttpContext) {
    const jogador = await player.find(params.id)
    if (!jogador) {
      return response.notFound({ message: 'Jogador não encontrado' })
    }

    await jogador.delete() // Remove do banco
    return response.ok({ message: 'Jogador excluído com sucesso' }) // Retorna status 200
  }
}
