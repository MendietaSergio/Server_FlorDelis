const multer = require('multer')
const multerConfig = require('../utils/multerConfig')
const Items =require('../models/Items')

//instancia de multer
const upload = multer(multerConfig).single('image')
//proceso la carga de imagen
exports.fileUpload = (req,res,next) =>{
    upload(req, res, function(error) {
        if(error){
            res.json({message:error});
        }
        return next();//si no hay error sigue la petición.
    })
}

exports.home= async (req,res) =>{
    try{
        res.render('home',{
            title:"title"
        })
    }catch(error){

    }
}
//agregar items
exports.add = async (req,res)=>{
    const items = new Items(req.body);
    console.log(req.body);
    try{
        if(req.file && req.file.filename){
            items.image = req.file.filename//si hay una imagen, le asigno el nombre que multer genera
        }
        await items.save()
        res.json({
            message:'Nuevo producto agregado!'
        })
    } catch(error){
        console.log(error);
        res.send(error)
        next()//para que continue el flujo de la peticion
    }
}

//primera accion: lista

exports.list = async (req,res) =>{
    try{
        const items = await Items.find({})
        res.json(items)
    } catch (error) {
        console.log(error);
        res.send(error)
        next()//para que continue el flujo de la peticion
    }
}
exports.detail = async (req, res, next) =>{
    try{    
        const item = await Items.findById(req.params.id)
        if(!item){
            res.status(404).json({
                Messaje:"El producto no existe"
            })
        }
        res.json(item)
    } catch(error){
        res.status(400).json({
            message: "Error al procesar la peticion"
        })
    }
}
//actualizar producto
exports.update = async (req, res, next) =>{
    try{
        let newItem = req.body; //asigno los nuevos valores a un nuevo item
        if(req.file && req.file.filname){//si tiene una nueva imagen lo guardo
            newItem.image = req.file.filename//si hay una imagen, le asigno el nombre que multer genera
        } else{//sino tiene una nueva imagen, busco la que tenia y lo guardo en el nuevo item
            const item = await Items.findById(req.params.id)
            newItem.image = item.image;
        }
        const itemUpdate = await Items.findOneAndUpdate({
            _id:req.params.id
            },newItem,
            // {new: true})//para que me devuelva el objeto actualizado
        )
        res.json({
            message:"Producto actualizado correctamente"
        })
    } catch(error){
        res.status(400).json({
            message: "Error al procesar la peticion"
        })
    }
}
//actualizar producto
exports.delete = async (req, res, next) =>{
    try{    
        await Items.findOneAndDelete({_id:req.params.id});
        res.json({
            message:"El producto fue eliminado"
        })
    } catch(error){
        res.status(400).json({
            message: "Error al procesar la peticion"
        })
    }
}