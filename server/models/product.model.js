const mongoose= require('mongoose');
// const ProductSchema = new mongoose.schema({

//     title : {type: String,
//             required : [true, "you must enter valid value"],
//             minlength : [5, "enter more than five characters"],
//            },
//     price : {type: Number,
//             required : [true, "you must enter valid value"],
//             minlength : [1, "enter more than five characters"],
//            },
//     dicription : {type: String,
//             required : [true, "you must enter valid value"],
//             minlength : [4, "enter more than five characters"],
//            }, 

           

// },   { timestamps: true } );


const ProductSchema = new mongoose.Schema({
        title : {type: String, require: true, minlength:4},
        price : {type: Number,
                 require: true, 
                 
                 minlength:1},
        discription : {type: String, 
                require: true, minlength:4}
        
    }, { timestamps: true });

const Product = mongoose.model('product',ProductSchema)
module.exports = Product

//module.exports.Product =  mongoose.model('product', ProductSchema);