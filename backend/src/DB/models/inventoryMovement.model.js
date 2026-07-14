import mongoose from "mongoose";

const inventoryMovementSchema = new mongoose.Schema({

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },

    variant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductVariant",
        default:null
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },

    type:{
        type:String,
        enum:[
            "sale",
            "purchase",
            "return",
            "manual_adjustment",
            "damaged",
            "expired",
            "transfer"
        ],
        required:true
    },

    quantity:{
        type:Number,
        required:true
    },

    previousStock:{
        type:Number,
        required:true
    },

    currentStock:{
        type:Number,
        required:true
    },

    reason:String,

    notes:String

},{
    timestamps:true
});

// ---------------------
inventoryMovementSchema.index({

product:1,

createdAt:-1

});

inventoryMovementSchema.index({

variant:1

});

inventoryMovementSchema.index({

order:1

});

inventoryMovementSchema.index({

type:1

});

export default
mongoose.model(
"InventoryMovement",
inventoryMovementSchema
);