import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
{
    firstName:{
        type:String,
        required:[true,"First name is required"],
        trim:true,
        minlength:2,
        maxlength:30
    },

    lastName:{
        type:String,
        required:[true,"Last name is required"],
        trim:true,
        minlength:2,
        maxlength:30
    },

    username:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },

    password:{
        type:String,
        required:true,
        minlength:8,
        select:false
    },

    phone:{
        type:String,
        unique:true,
        sparse:true
    },

    avatar:{
        secure_url:String,
        public_id:String
    },

    gender:{
        type:String,
        enum:["male","female"]
    },

    dateOfBirth:Date,

    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
    },

    addresses:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Address"
        }
    ],

    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },

    wishlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wishlist"
    },

    isVerified:{
        type:Boolean,
        default:false
    },

    status:{
        type:String,
        enum:["active","blocked"],
        default:"active"
    },

    lastLogin:Date
},
{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
}
);

userSchema.pre("save", async function(next){

    if(!this.isModified("password"))
        return next();

    this.password = await bcrypt.hash(this.password,10);

    next();

});
// -------------------------------
userSchema.methods.comparePassword = async function(password){

    return await bcrypt.compare(password,this.password);

}
// -------------------------------
userSchema.virtual("fullName").get(function(){

    return `${this.firstName} ${this.lastName}`;

});
// -------------------------------
userSchema.index({email:1});

userSchema.index({username:1});

userSchema.index({phone:1});
export default mongoose.model("User",userSchema);