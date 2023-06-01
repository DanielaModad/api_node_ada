import mongoose from "mongoose";

const BookScheme = new mongoose.Schema(
    {
        title: {
            type: String
        },
        writer: {
            type: String
        },
        editorial: {
            type: String
        },
        pages: {
            type: Number
        },
        image: {
            type: String
        },
    },    
    {
        timestamps: true,
        versionKey: false,
    }

    
);

export default mongoose.model("books", BookScheme);