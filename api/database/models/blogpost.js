import mongoose from "mongoose";

var BlogpostSchema = new mongoose.Schema({
    title: { type: String },
    authors: { type: [String] },
    committeeTags: { type: [String] },
    tags: { type: [String] },
    content: { type: String },
});

export default mongoose.model("Blogpost", BlogpostSchema);