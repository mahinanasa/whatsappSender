let fileName = '.env'
require('dotenv').config()
const envVars = process.env

const config = {
    env : envVars.NODE_ENV,
    waEndpoint : 'https://api.chat-api.com',
    waInstance :  'instance337254',
    waToken: "s5dwzswuro2c0ue9"
   
}

module.exports = config