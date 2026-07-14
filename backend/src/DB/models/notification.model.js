import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({

    recipient:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    title:{
        type:String,
        required:true
    },

    message:{
        type:String,
        required:true
    },

    type:{
        type:String,
        enum:[
            "order",
            "payment",
            "shipping",
            "product",
            "coupon",
            "system"
        ],
        required:true
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },

    coupon:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon"
    },

    isRead:{
        type:Boolean,
        default:false
    },

    readAt:Date

},{
    timestamps:true
});

// ------------------------
notificationSchema.index({

recipient:1,

createdAt:-1

});

notificationSchema.index({

isRead:1

});

notificationSchema.index({

type:1

});
export default
mongoose.model(
"Notification",
notificationSchema
);