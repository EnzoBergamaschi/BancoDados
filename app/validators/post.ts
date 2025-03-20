import vine from '@vinejs/vine'

export const JogadorValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(3).maxLength(50),
    posicao: vine.string().trim().minLength(3).maxLength(30),
    titular: vine.boolean(),
    altura: vine.number().min(1.0).max(3.0),
    idade: vine.number().min(16).max(45),
  })
)

// Customização das mensagens de erro de forma manual no controller
export const IndexValidator = vine.compile(
  vine.object({
    title: vine.string().trim().minLength(6),
    description: vine.string().trim().escape(),
  })
)

