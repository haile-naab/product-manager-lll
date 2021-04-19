const Product = require('./../models/product.model')

module.exports={

getAll: (req,res)=>{
    Product.find({})
    .then((allProducts)=> {console.log(allProducts);
    res.json(allProducts);
    })

    .catch((err)=>{
        console.log('error found',err);
        res.json(err);
    })
},

create: (req,res)=>{
    console.log(req.body)

    Product.create(req.body)
    .then(()=> {console.log(newProducts);
    res.json(newProducts);
    })

    .catch((err)=>{
        console.log('product not created',err);
        res.json(err);
    })
},

getOne: (req,res)=>{
    console.log(req.params);

    Product.findById(req.params.id)
    .then( (oneProducts)=> {console.log(oneProducts)
    res.json(oneProducts);
    })

    .catch((err)=>{
        console.log('product not found',err);
        res.json(err);
    })
},

update: (req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    
    Product.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true,
    })
    .then((updateProducts)=> {console.log(updateProducts);
    res.json(updateProducts);
    })

    .catch((err)=>{
        console.log('product not updated',err);
        res.json(err);
    })
},

delete: (req,res)=>{
    console.log(req.params.id);

    Product.findByIdAndDelete(req.params.id)
    .then( (deleteProducts)=> {console.log(deleteProducts)
    res.json(deleteProducts);
    })

    .catch((err)=>{
        console.log(' error found in deleting product ',err);
        res.json(err);
    })
}





}