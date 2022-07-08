import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    banner: {
        type: String,
        required: true,
    },
    altText: {
        type: String,
        required: true,
    },
    readingTime: {
        type: String,
        required: true,
    },
    customID: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    totalViews: {
        type: Number,
        default: 0,
    },
});

export default mongoose.models.blog || model('blog', blogSchema)