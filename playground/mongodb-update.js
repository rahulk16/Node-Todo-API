const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server.');;
  }

  console.log('Connected to server.');
  const db = client.db();

  db.collection('TodoApp').findOneAndUpdate({
    _id: new ObjectID("5c5600d88ea25e88804e4f15"),
  },{
    $set: {
      completed:true
    }
  },{
    returnOriginal :false
  }).then((result) => {
    console.log(result);
  });

  db.collection('User').findOneAndUpdate({
    _id: new ObjectID("5c55fb857a673b1b0a10ab80")
  },{
    $set:{
      name : 'thunder'
    },$inc:{
      age: 1
    }
  },{
    returnOriginal:false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
