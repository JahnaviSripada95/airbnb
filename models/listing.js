const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        
        type: String,
        default : "https://unsplash.com/photos/a-lone-tree-in-the-middle-of-a-foggy-field-sMsxUARkCos" ,
        set: (v) => v===" "? "https://unsplash.com/photos/a-lone-tree-in-the-middle-of-a-foggy-field-sMsxUARkCos" : v,
    },
    price:Number,
    location:String,
    country:String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],

});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;