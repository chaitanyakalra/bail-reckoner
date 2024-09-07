const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI ;

// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(() => console.log('MongoDB connected'))
//     .catch((err) => console.error('MongoDB connection failed:', err));


const adminSchema = new mongoose.Schema({
    id:{
        type:Number,
        require: true,
    },

    password:{
        type: "String",
        require: true,
    }
});

const adminDetail = mongoose.model('admindetail' , adminSchema);

module.exports = adminDetail;

console.log("created schema");