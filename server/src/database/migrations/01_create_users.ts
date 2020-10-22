import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('login').notNullable().unique()
        table.string('password').notNullable()
        table.string('email')
        table.string('bio')
        table.string('avatar')
        table.string('whatsapp')

        table.integer('role')
            .references('id')
            .inTable('roles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
            .defaultTo(3)
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('users')
}