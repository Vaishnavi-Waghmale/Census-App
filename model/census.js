const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema = new Schema({
    city: {
        type: String,
        required: [true, 'City-state field required']

    },
    census: {
        type: Number,
        required: [true, 'census required']
    }

});

const Census = mongoose.model('census', CSchema, "census");

module.exports = Census;
