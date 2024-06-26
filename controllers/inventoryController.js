const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// create inventory
const createInventoryController = async (req,res)=>{
    try {
        const {email,inventoryType} = req.body
        // validation
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error('user not found')
        }
        if(inventoryType === 'in' && user.role !== 'donar'){
            throw new Error('not a donor account')
        }
        if(inventoryType === 'out' && user.role !== 'hospital'){
            throw new Error('not a hospital account')
        }
        //save record

        const inventory = new inventoryModel(req.body)
        await inventory.save()
        return res.status(201).send({
            success:true,
            message:'new blood record added'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in create inventory api',
            error
        })
    }
}

// get all blood records
const getInventoryController = async (req,res)=>{
    try {
        const inventory = await inventoryModel.find({organisation:req.body.userId}).populate('hospital').populate('donar').sort({createdAt:-1})
        return res.status(200).send({
            success:true,
            message:'get all records succesfully',
            inventory
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:'Error in get all inventory',
            error
        })
    }
}


module.exports = {createInventoryController,getInventoryController}