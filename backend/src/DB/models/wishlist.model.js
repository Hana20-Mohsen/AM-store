import mongoose from "mongoose";

const wishlistItemSchema = new mongoose.Schema({

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

    addedAt:{
        type:Date,
        default:Date.now
    },

    notifyPriceDrop:{
        type:Boolean,
        default:false
    },

    notifyBackInStock:{
        type:Boolean,
        default:false
    }

},{
    _id:false
});

const wishlistSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },

    items:[wishlistItemSchema]

},{
    timestamps:true
});
// ----------------------
wishlistSchema.index({

user:1

});

export default mongoose.model(
"Wishlist",
wishlistSchema
);