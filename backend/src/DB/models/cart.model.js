import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
{
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

    quantity:{
        type:Number,
        required:true,
        min:1,
        default:1
    },

    price:{
        type:Number,
        required:true
    },

    totalPrice:{
        type:Number
    }

},
{
    _id:false
});
cartSchema.pre("save",function(next){

    this.subTotal = 0;

    this.items.forEach(item=>{

        item.totalPrice = item.quantity * item.price;

        this.subTotal += item.totalPrice;

    });

    this.total =

        this.subTotal

        - this.discount

        + this.shippingFee;

    next();

});

const cartSchema = new mongoose.Schema(
{

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },

    items:[cartItemSchema],

    coupon:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon"
    },

    subTotal:{
        type:Number,
        default:0
    },

    discount:{
        type:Number,
        default:0
    },

    shippingFee:{
        type:Number,
        default:0
    },

    total:{
        type:Number,
        default:0
    }

},
{
    timestamps:true
});

export default mongoose.model("Cart",cartSchema);