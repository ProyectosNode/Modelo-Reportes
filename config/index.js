require('dotenv').config()

const config = {
    //Development
    port: process.env.PORT,
    //Production
    dev:process.env.NODE_ENV !== 'production'
}

module.exports = { config: config } 