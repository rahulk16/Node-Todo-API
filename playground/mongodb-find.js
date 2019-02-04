const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server.');;
  }

  console.log('Connected to server.');
  const db = client.db();

  // db.collection('TodoApp').find({
  //   _id:new ObjectID('5c5600d88ea25e88804e4f15')
  // }).toArray().then((docs) => {
  //   console.log('TodoApp');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) => {
  //   console.log('Unable to fetch error',err);
  // });

  // db.collection('TodoApp').find().count().then((count) => {
  //   console.log('TodoApp Count: ',count);
  // },(err) => {
  //   console.log('Unable to fetch error',err);
  // });

  db.collection('User').find({name:'Thunder'}).count().then((count) => {
    console.log('User Thunder Count: ',count);
  },(err) => {
    console.log('Unable to fetch error',err);
  });

  client.close();
});
