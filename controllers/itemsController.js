const Items =require('../models/Items')

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
        const item = await Items.findOneAndUpdate({
            _id:req.params.id
            },req.body,
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