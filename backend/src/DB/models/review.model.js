import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },

    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
        required:true
    },

    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },

    title:{
        type:String,
        trim:true,
        maxlength:100
    },

    comment:{
        type:String,
        required:true,
        maxlength:2000
    },

    images:[
        {
            secure_url:String,
            public_id:String
        }
    ],

    likes:{
        type:Number,
        default:0
    },

    dislikes:{
        type:Number,
        default:0
    },

    isVerifiedPurchase:{
        type:Boolean,
        default:true
    },

    isApproved:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});
// --------------------------------------
reviewSchema.index(
{
    user:1,
    product:1
},
{
    unique:true
});
// --------------------------------------
reviewSchema.post("save",async function(){

    const Product = mongoose.model("Product");

    const stats = await this.constructor.aggregate([

        {
            $match:{
                product:this.product
            }
        },

        {
            $group:{
                _id:"$product",

                averageRating:{
                    $avg:"$rating"
                },

                ratingCount:{
                    $sum:1
                }
            }
        }

    ]);

    await Product.findByIdAndUpdate(

        this.product,

        {
            averageRating:stats[0].averageRating,

            ratingCount:stats[0].ratingCount
        }

    );

});
export default mongoose.model("Review",reviewSchema);