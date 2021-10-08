let fileName = '.env'
require('dotenv').config()
const envVars = process.env
//anunanas@yopmail.com

const config = {
    env : envVars.NODE_ENV,
    waEndpoint : 'https://api.chat-api.com',
    waInstance :  'instance347570',
    waToken: "0dqncw3ob7lsaz21"
   
}

module.exports = config