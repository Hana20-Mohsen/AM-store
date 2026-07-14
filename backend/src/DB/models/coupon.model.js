import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
{
    code:{
        type:String,
        required:true,
        unique:true,
        uppercase:true,
        trim:true
    },

    description:{
        type:String,
        maxlength:300
    },

    discountType:{
        type:String,
        enum:[
            "percentage",
            "fixed",
            "free_shipping"
        ],
        required:true
    },

    discountValue:{
        type:Number,
        required:true,
        min:0
    },

    minimumOrderAmount:{
        type:Number,
        default:0
    },

    maximumDiscount:{
        type:Number
    },

    usageLimit:{
        type:Number,
        default:1
    },

    usedCount:{
        type:Number,
        default:0
    },

    startDate:{
        type:Date,
        required:true
    },

    expiryDate:{
        type:Date,
        required:true
    },

    isActive:{
        type:Boolean,
        default:true
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
{
    timestamps:true
});

export default mongoose.model("Coupon",couponSchema);