import Knex from 'knex'; // formato da variável (letra maiuscula p diferenciar) ao adicionar esse tipo na função abaixo ganhamos a inteligencia do typescript

export async function up(knex: Knex) {
    // CRIAR A TABELA
    return knex.schema.createTable('point_items', table => {
        table.increments('id').primary(),

        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points')

        table.integer('item_id')
        .notNullable()
        .references('id')
        .inTable('items')
    })
}

export async function down(knex: Knex){
    // VOLTAR ATRAS (DELETAR A TABELA)
    return knex.schema.dropTable('point_items')
}