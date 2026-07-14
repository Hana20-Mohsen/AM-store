import mongoose from "mongoose";

const auditLogSchema = new mongoose.Schema({

    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    action: {
        type: String,
        enum: [
            "create",
            "update",
            "delete",
            "login",
            "logout",
            "refund",
            "cancel",
            "export",
            "import"
        ],
        required: true
    },

    entityType: {
        type: String,
        required: true
    },

    entityId: {
        type: mongoose.Schema.Types.ObjectId
    },

    changes: {
        before: {
            type: mongoose.Schema.Types.Mixed
        },

        after: {
            type: mongoose.Schema.Types.Mixed
        }
    },

    ipAddress: String,

    userAgent: String,

    description: String,
    requestId: String,
    sessionId: String,

    status: {
        type: String,
        enum: ["success", "failed"]
    },

    metadata: mongoose.Schema.Types.Mixed

}, {
    timestamps: true
});

// ----------------------------
auditLogSchema.index({
    actor: 1,
    createdAt: -1
});

auditLogSchema.index({
    entityType: 1,
    entityId: 1
});

auditLogSchema.index({
    action: 1
});

export default mongoose.model("AuditLog", auditLogSchema);