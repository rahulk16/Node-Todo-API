// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server.');;
  }

  console.log('Connected to server.');
  const db = client.db();

  // db.collection('TodoApp').insertOne({
  //   text : 'Something to do.',
  //   completed : false,
  //   useNewUrlParser: true
  // },(err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });


  // db.collection('User').insertOne({
  //   name: 'Thunder',
  //   age : '21',
  //   location : 'Sri City'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });


  client.close();
});
