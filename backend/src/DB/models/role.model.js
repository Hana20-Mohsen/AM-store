import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Role name is required"],
      unique: true,
      trim: true,
      lowercase: true,
      enum: ["customer", "admin", "seller", "support"],
    },

    description: {
      type: String,
      trim: true,
      maxlength: 300,
    },

    permissions: [
      {
        type: String,
        enum: [
          "create_product",
          "update_product",
          "delete_product",
          "manage_orders",
          "manage_users",
          "manage_categories",
          "manage_coupons",
          "view_dashboard",
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Role", roleSchema);