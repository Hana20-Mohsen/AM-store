import mongoose from "mongoose";
import slugify from "slugify";

const brandSchema = new mongoose.Schema(
{

    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    slug:{
        type:String,
        unique:true
    },

    description:String,

    logo:{
        secure_url:String,
        public_id:String
    },

    website:String,

    country:String,

    isActive:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

brandSchema.pre("save",function(next){

    this.slug = slugify(this.name,{
        lower:true
    });

    next();

});

export default mongoose.model("Brand",brandSchema);