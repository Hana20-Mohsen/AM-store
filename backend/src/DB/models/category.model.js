import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:[true,"Category name is required"],
        trim:true,
        unique:true,
        minlength:2,
        maxlength:50
    },

    slug:{
        type:String,
        unique:true,
        lowercase:true
    },

    description:{
        type:String,
        maxlength:500
    },

    image:{
        secure_url:String,
        public_id:String
    },

    parentCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        default:null
    },

    level:{
        type:Number,
        default:0
    },

    isActive:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
});

categorySchema.pre("save",function(next){

    this.slug = slugify(this.name,{
        lower:true
    });

    next();

});

categorySchema.index({
    name:1
});

categorySchema.index({
    slug:1
});

export default mongoose.model("Category",categorySchema);