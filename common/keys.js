let fileName = '.env'
require('dotenv').config()
const envVars = process.env
//anunanas@yopmail.com

const config = {
    env : envVars.NODE_ENV,
    waEndpoint : 'https://api.chat-api.com',
    waInstance :  'instance351813',
    waToken: "eb1bk27l2b7lrhv1"
   
}

module.exports = config