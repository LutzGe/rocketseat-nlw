import knex from 'knex'
import path from 'path'

const db = knex({
    client: 'postgres',
    connection: {
      host: '172.19.0.2',
      port: 5432,
      user : 'postgres',
      password : 'postgres',
      database : 'proffy'
    }
  }
)

export default db