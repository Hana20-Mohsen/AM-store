import mongoose from "mongoose";

const trackingEventSchema = new mongoose.Schema({

    status:{
        type:String,
        required:true
    },

    description:String,

    location:String,

    eventDate:{
        type:Date,
        default:Date.now
    }

},{
    _id:false
});

const shippingSchema = new mongoose.Schema({

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true,
        unique:true
    },

    carrier:{
        type:String,
        enum:[
            "Aramex",
            "DHL",
            "FedEx",
            "UPS",
            "Bosta",
            "SMSA",
            "Manual"
        ],
        required:true
    },

    trackingNumber:{
        type:String,
        unique:true,
        sparse:true
    },

    trackingUrl:String,

    shippingStatus:{
        type:String,
        enum:[
            "pending",
            "ready_for_pickup",
            "picked_up",
            "in_transit",
            "out_for_delivery",
            "delivered",
            "returned",
            "failed"
        ],
        default:"pending"
    },

    estimatedDeliveryDate:Date,

    shippedAt:Date,

    deliveredAt:Date,

    shippingCost:{
        type:Number,
        default:0
    },

    notes:String,

    trackingHistory:[trackingEventSchema]

},{
    timestamps:true
});

// -----------------------------
shippingSchema.index({

    order:1

});

shippingSchema.index({

    trackingNumber:1

});

shippingSchema.index({

    shippingStatus:1

});
export default mongoose.model("Shipping",shippingSchema);