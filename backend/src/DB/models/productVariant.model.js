import mongoose from "mongoose";

const productVariantSchema = new mongoose.Schema(
{
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    variantKey: {
    type: String,
    unique: true
},

    sku:{
        type:String,
        required:true,
        unique:true,
        uppercase:true
    },

    barcode:String,

    attributes:[
        {
            name:{
                type:String,
                required:true
            },

            value:{
                type:String,
                required:true
            }
        }
    ],

    price:{
        type:Number,
        required:true,
        min:0
    },

    discount:{
        type:Number,
        default:0,
        min:0,
        max:100
    },

    priceAfterDiscount:{
        type:Number
    },

    stock:{
        type:Number,
        default:0,
        min:0
    },

    sold:{
        type:Number,
        default:0
    },

    image:{
        secure_url:String,
        public_id:String
    },

    isActive:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

productVariantSchema.pre("save",function(next){

    this.priceAfterDiscount =
        this.price -
        (this.price*this.discount)/100;

    next();

});
productVariantSchema.index({
    product:1
});

productVariantSchema.index({
    sku:1
});

productVariantSchema.index({
    stock:1
});
export default mongoose.model("ProductVariant",productVariantSchema);