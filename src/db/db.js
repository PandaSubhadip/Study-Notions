const mongoose = require('mongoose')

let ConectDb = () =>{
mongoose.connect ( process.env.MONGODB_URL)
.then (() => {
    console.log(`Conect db sucessfull `);
})
.catch((error)=>{
    console.log('db connection failed');
    console.error(`this is eror to connect db ${error}`);

});
};

module.exports = ConectDb;