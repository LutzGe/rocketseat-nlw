import Knex from 'knex'

export async function up(knex: Knex, Promise: Promise<Knex>) {
    return knex.schema.createTable('roles', table => {
        table.increments('id').primary()
        table.string('description').notNullable()
        table.boolean('active').notNullable().defaultTo(true)
        table.boolean('isAdmin').notNullable()
    }).then(() => {
        return knex('roles').insert([
            {description: "ADMIN",      isAdmin: true},
            {description: "TEACHER",    isAdmin: false},
            {description: "USER",       isAdmin: false}
        ])
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('roles')
}