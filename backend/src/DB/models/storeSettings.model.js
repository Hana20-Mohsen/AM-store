import mongoose from "mongoose";

const storeSettingsSchema = new mongoose.Schema({

    storeName: {
        type: String,
        required: true
    },

    storeEmail: String,

    storePhone: String,

    logo: String,

    favicon: String,

    website: String,

    supportedLanguages: [{
        type: String,
        enum: ["ar", "en"]
    }],

    defaultLanguage: {
        type: String,
        default: "en"
    },

    currency: {
        code: {
            type: String,
            default: "EGP"
        },

        symbol: {
            type: String,
            default: "E£"
        },

        position: {
            type: String,
            enum: ["before", "after"],
            default: "before"
        }
    },

    timezone: {
        type: String,
        default: "Africa/Cairo"
    },

    tax: {
        enabled: {
            type: Boolean,
            default: true
        },

        percentage: {
            type: Number,
            default: 14
        }
    },

    shipping: {

        freeShippingThreshold: {
            type: Number,
            default: 0
        },

        defaultShippingFee: {
            type: Number,
            default: 80
        }

    },

    maintenanceMode: {
        type: Boolean,
        default: false
    },

    maintenanceMessage: String,
    payment: {

        cashOnDelivery: {
            enabled: true
        },

        stripe: {
            enabled: true
        },

        paypal: {
            enabled: false
        },

        paymob: {
            enabled: true
        }

    },
    email: {

        fromName: String,

        fromEmail: String,

        replyTo: String

    },
    seo: {

        metaTitle: String,

        metaDescription: String,

        keywords: [String],

        ogImage: String

    },
    social: {

        facebook: String,

        instagram: String,

        linkedin: String,

        youtube: String,

        tiktok: String

    },
    invoice: {

        prefix: "INV",

        nextNumber: 1001

    },
    security: {

        loginAttempts: 5,

        lockMinutes: 15

    },
    search: {

        productsPerPage: 20,

        defaultSort: "newest"

    }

}, {
    timestamps: true
});

export default mongoose.model(
    "StoreSettings",
    storeSettingsSchema
);