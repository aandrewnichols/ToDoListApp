const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timeStamp: {
        type: String,
        defualt: Date.now()
    }
})

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;