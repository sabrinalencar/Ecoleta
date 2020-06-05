import Knex from 'knex'; // formato da variável (letra maiuscula p diferenciar) ao adicionar esse tipo na função abaixo ganhamos a inteligencia do typescript

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('points', table => {
        table.increments('id').primary()
        table.string('image').notNullable()
        table.string('name').notNullable()
        table.string('email').notNullable()
        table.string('whatsapp').notNullable()
        table.decimal('latitude').notNullable()
        table.decimal('longitude').notNullable()
        table.string('city').notNullable()
        table.string('uf', 2).notNullable()
    })
}

export async function down(knex: Knex){
    // VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('points')
}