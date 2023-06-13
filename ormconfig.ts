import 'dotenv/config'

const ConnectionConfig = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "entities": ["dist/**/*.entity.js"],
    "synchronize": false
}

export default ConnectionConfig;
