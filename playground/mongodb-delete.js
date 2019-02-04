const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
  if(err){
    return console.log('Unable to connect to MongoDb server.');;
  }

  console.log('Connected to server.');
  const db = client.db();

  //DeleteMany
  db.collection('TodoApp').deleteMany({text:'Something to do.'}).then((result) => {
    console.log(result);
  });

  //DeleteOne
  db.collection('TodoApp').deleteOne({text : 'Eat Lunch'}).then((result) => {
    console.log(result);
  });

  //FindOneAndDelete
  db.collection('TodoApp').findOneAndDelete({completed:false}).then((result) => {
    console.log(result);
  });

  // client.close();
});
