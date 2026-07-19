import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    refreshTokenHash:{
        type:String,
        required:true
    },

    deviceName:String,

    deviceType:{
        type:String,
        enum:[
            "desktop",
            "mobile",
            "tablet",
            "unknown"
        ],
        default:"unknown"
    },

    browser:String,

    operatingSystem:String,

    ipAddress:String,

    country:String,

    city:String,

    expiresAt:{
        type:Date,
        required:true
    },

    lastUsedAt:{
        type:Date,
        default:Date.now
    },

    isRevoked:{
        type:Boolean,
        default:false
    },

    revokedAt:Date,

    revokeReason:String

},{
    timestamps:true
});

// ----------------------
sessionSchema.index({

user:1,

isRevoked:1

});

sessionSchema.index({

refreshToken:1

});

sessionSchema.index({

expiresAt:1

});

export default
mongoose.model("Session",sessionSchema);