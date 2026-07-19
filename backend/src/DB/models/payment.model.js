import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    gateway:{
        type:String,
        enum:[
            "cash",
            "stripe",
            "paypal",
            "paymob"
        ],
        required:true
    },

    transactionId:{
        type:String,
        unique:true,
        sparse:true
    },

    gatewayOrderId:String,

    paymentIntentId:String,

    amount:{
        type:Number,
        required:true
    },

    currency:{
        type:String,
        default:"EGP"
    },

    status:{
        type:String,
        enum:[
            "pending",
            "authorized",
            "paid",
            "failed",
            "cancelled",
            "refunded"
        ],
        default:"pending"
    },

    failureReason:String,

    paidAt:Date,

    refundedAt:Date

},{
    timestamps:true
});
// ------------------------
paymentSchema.index({
    order:1
});

paymentSchema.index({
    customer:1
});

paymentSchema.index({
    transactionId:1
});

paymentSchema.index({
    status:1
});

paymentSchema.index({
    gateway:1
});

export default mongoose.model("Payment",paymentSchema);