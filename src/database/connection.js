import mongoose from "mongoose";
import logger from "../utils/logger.js";
import 'dotenv/config.js'


const connectDB = async () => {

    let databaseUrl = 'mongodb://andrerodrigues01:Andre2015@mongodb.andrerodriguescorreia.com.br/andrerodrigues01'

    //
    // if (process.env.ENVIRONMENT === 'prod'){
    //     databaseUrl = process.env.DB_PROD
    // }
    //
    // console.log(databaseUrl)


    try {
        await mongoose.connect(databaseUrl);
        logger.info('Conexão com banco de dados realizada com sucesso')
    }catch (error){
        logger.error(`Erro na aplicação: ${error.message}`)
    }

}

export { connectDB }