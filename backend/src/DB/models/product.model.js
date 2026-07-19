import mongoose from "mongoose";
import slugify from "slugify";

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title is required"],
            trim: true,
            minlength: 3,
            maxlength: 150
        },

        slug: {
            type: String,
            unique: true,
            lowercase: true
        },

        description: {
            type: String,
            required: true,
            minlength: 20
        },

        shortDescription: {
            type: String,
            maxlength: 300
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },

        brand: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Brand"
        },

        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        sku: {
            type: String,
            unique: true,
            uppercase: true
        },

        barcode: String,

        price: {
            type: Number,
            required: true,
            min: 0
        },

        discount: {
            type: Number,
            default: 0,
            min: 0,
            max: 100
        },

        priceAfterDiscount: {
            type: Number
        },

        totalStock: {
            type: Number,
            required: true,
            default: 0
        },
        // stock:{
        //     type:Number,
        //     required:true,
        //     default:0
        // },

        sold: {
            type: Number,
            default: 0
        },

        thumbnail: {
            secure_url: String,
            public_id: String
        },

        images: [
            {
                secure_url: String,
                public_id: String
            }
        ],

        weight: Number,

        dimensions: {
            length: Number,
            width: Number,
            height: Number
        },

        averageRating: {
            type: Number,
            default: 0
        },

        ratingCount: {
            type: Number,
            default: 0
        },

        featured: {
            type: Boolean,
            default: false
        },

        isPublished: {
            type: Boolean,
            default: true
        },
        hasVariants: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true
    }
);
// ---------------------------
productSchema.pre("save", function (next) {

    this.slug = slugify(this.title, {
        lower: true
    });

    next();

});
// ---------------------------------
productSchema.pre("save", function (next) {

    this.priceAfterDiscount =
        this.price -
        (this.price * this.discount) / 100;

    next();

});
// --------------------
productSchema.index({
    title: "text",
    description: "text"
});

productSchema.index({
    category: 1
});

productSchema.index({
    brand: 1
});

productSchema.index({
    price: 1
});

productSchema.index({
    averageRating: -1
});
export default mongoose.model("Product", productSchema);