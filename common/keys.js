let fileName = '.env'
require('dotenv').config()
const envVars = process.env
//anunanas@yopmail.com

const config = {
    env : envVars.NODE_ENV,
    waEndpoint : 'https://api.chat-api.com',
    waInstance :  'instance341288',
    waToken: "dedjf1jtzdpgccl8"
   
}

module.exports = config