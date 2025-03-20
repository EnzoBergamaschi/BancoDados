// Arquivo: database/migrations/xxxx_xx_xx_create_jogadores_table.ts

import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'Jogadores'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary() // ID único
      table.string('nome').notNullable() // Nome do jogador
      table.string('posicao').notNullable() // Posição (ex: atacante)
      table.boolean('titular').defaultTo(false) // Se é titular ou não
      table.float('altura').notNullable() // Altura do jogador
      table.integer('idade').notNullable() // Idade do jogador

      table.timestamp('created_at').defaultTo(this.now()) 
      table.timestamp('updated_at').defaultTo(this.now())  
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
