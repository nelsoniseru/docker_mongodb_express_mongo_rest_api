const mongoClient = require('mongoose');
mongoClient.connect('mongodb://admin:password@localhost:27017/list-user?authSource=admin',(err,db)=>{
if(err){
    console.log(err)
}else{

    console.log("connected...")
}

})


module.exports.mongoClient = mongoClient