import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        
        table.integer('week_day')
        table.integer('from') // hora de inicio
        table.integer('to')   // hora de fim 

        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('class')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
}