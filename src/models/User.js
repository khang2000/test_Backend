import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: "member",
    },
    addressBorn: {
      type: String,
    },
    image: {
      type: String,
    },
    birthday: {
      type: String,
    },
    position: {
      type: String,
    },
    id_number: {
      type: String,
    },
    description: {
      type: String,
    },
  },

  { versionKey: false, timestamps: true }
);

export default mongoose.model("User", userSchema);
