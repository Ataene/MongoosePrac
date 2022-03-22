const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", { useNewUrlParser: true });

const peopleSchema = new mongoose.Schema({

    name: String,
    title: String,
    age: Number,
});

const People = mongoose.model("People", peopleSchema);

const people = new People({

    name: "Emmanuel",
    title: "Engineer",
    age: 33,
});
people.save();

console.log(people);

