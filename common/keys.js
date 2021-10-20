let fileName = '.env'
require('dotenv').config()
const envVars = process.env
//anunanas@yopmail.com

const config = {
    env : envVars.NODE_ENV,
    waEndpoint : 'https://api.chat-api.com',
    waInstance :  'instance353542',
    waToken: "fb8n68o5m2jha2cq"
   
}

module.exports = config