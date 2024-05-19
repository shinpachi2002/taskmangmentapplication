const mongoose=require('mongoose');

async function dbconnect(){
    const DB_URL=process.env.DB_URL;
    const DB=process.env.DB;
    try {
        await mongoose.connect(DB_URL+"/"+DB);
        console.log("Database sucessfully connected")
    } catch (error) {
        console.log("database error"+error);
    }
}

module.exports=dbconnect;