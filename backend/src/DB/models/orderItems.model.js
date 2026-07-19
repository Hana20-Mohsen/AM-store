import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },

    variant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductVariant"
    },

    sku:String,

    productName:{
        type:String,
        required:true
    },

    productSlug:String,

    thumbnail:String,

    brandName:String,

    categoryName:String,

    attributes:[
        {
            name:String,
            value:String
        }
    ],

    quantity:{
        type:Number,
        required:true
    },

    unitPrice:{
        type:Number,
        required:true
    },

    discount:{
        type:Number,
        default:0
    },

    finalPrice:{
        type:Number,
        required:true
    },

    lineTotal:{
        type:Number,
        required:true
    }

},{
    timestamps:true
});

// -----------------------------
orderItemSchema.index({
    order:1
});

orderItemSchema.index({
    product:1
});

orderItemSchema.index({
    sku:1
});
export default mongoose.model("OrderItem",orderItemSchema);