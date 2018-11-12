
const env = require('./environment.js');
module.exports = {
   // url: 'mongodb://localhost:27017/easy-notes'

// /mongodb://cmtmongo:O6aJ15GrDe1mFqzWNw1bskvbDwGX1AmWQZdRYlCyWnveH1e5q5829XERnUQn89WO1tBlswjlL45ryXapJoPFEg==@cmtmongo.documents.azure.com:10255/?ssl=true&replicaSet=globaldb
   url:`mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`
}