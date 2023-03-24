const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {

  MongoClient.connect(
    'mongodb+srv://new_user_1:9IIAmBTTB8Ac5wMS@cluster0.tctwvmy.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected!');
      _db=client.db()
      callback(client);
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb=()=>{
  if(_db){
    return _db
  }
  throw "no database found!"
}

exports.mongoConnect = mongoConnect;
exports.getDb=getDb;
