import server from './routes'
import mongoose from 'mongoose'
import {config} from "dotenv";

server.listen(8080, function() {
  config()
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
});

const db = mongoose.connection

db.on('error', (err) => console.log(err))

db.once('open', () => {  
  console.log('%s listening at %s', server.name, server.url)

})