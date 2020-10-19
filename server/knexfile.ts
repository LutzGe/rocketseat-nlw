import path from 'path'

module.exports = {
    client: 'pg',
    connection: {
        host: '172.19.0.2',
        port: 5432,
        user : 'postgres',
        password : 'postgres',
        database : 'proffy',
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
}