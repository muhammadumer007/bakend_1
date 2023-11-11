const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    shortName: {
        type: String,
        required: true,
    },
    fee: {
        type: Number,
    },
    price: {
        type: {
            currency: String,
            amount: Number,
        },
    },
},
{
    timestamp: true
}
);
const coursemodel = mongoose.model("course", CourseSchema);
module.exports = coursemodel;
