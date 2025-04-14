const mongoose=require("mongoose");
require("dotenv").config();
const main = async()=>{
    try{
        const connection= await mongoose.connect(process.env.MONGO_URL);
        console.log("mongo connected")
        console.log("Server started on port: 3001");
    }catch(err){
console.log(err.message);
    }

}

main()

module.exports={
    main
}