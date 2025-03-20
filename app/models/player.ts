// Arquivo: app/models/Player.ts

import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Player extends BaseModel {
  
  static table = 'Jogadores'
  
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare posicao: string

  @column()
  declare titular: boolean

  @column()
  declare altura: number

  @column()
  declare idade: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
