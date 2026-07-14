import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({

    orderNumber:{
        type:String,
        unique:true,
        required:true
    },

    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    shippingAddress: {
    fullName: String,
    phone: String,
    country: String,
    city: String,
    state: String,
    street: String,
    building: String,
    floor: String,
    apartment: String,
    postalCode: String
},

    coupon:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon",
        default:null
    },

    payment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Payment"
    },

    shipping:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shipping"
    },

    paymentMethod:{
        type:String,
        enum:[
            "cash",
            "stripe",
            "paypal",
            "paymob"
        ],
        required:true
    },

    paymentStatus:{
        type:String,
        enum:[
            "pending",
            "paid",
            "failed",
            "refunded"
        ],
        default:"pending"
    },

    orderStatus:{
        type:String,
        enum:[
            "pending",
            "confirmed",
            "processing",
            "shipping",
            "delivered",
            "cancelled"
        ],
        default:"pending"
    },

    itemsCount:{
        type:Number,
        default:0
    },

    subtotal:{
        type:Number,
        required:true
    },

    discount:{
        type:Number,
        default:0
    },

    shippingFee:{
        type:Number,
        default:0
    },

    tax:{
        type:Number,
        default:0
    },

    total:{
        type:Number,
        required:true
    },

    notes:String,

    placedAt:{
        type:Date,
        default:Date.now
    },

    paidAt:Date,

    deliveredAt:Date,

    cancelledAt:Date

},{
    timestamps:true
});
// -----------------------------
orderSchema.index({
    customer:1,
    createdAt:-1
});

orderSchema.index({
    orderStatus:1
});

orderSchema.index({
    paymentStatus:1
});

orderSchema.index({
    orderNumber:1
});

export default mongoose.model("Order",orderSchema);