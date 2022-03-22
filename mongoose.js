const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/peopleDB", { useNewUrlParser: true });

const peopleSchema = new mongoose.Schema({

    name: String,
    title: String,
    age: Number,
    phone: Number,
    createdAt: { 
        type: Date
    },
    email: String
});

const People = mongoose.model("People", peopleSchema);

const people = new People({

    name: "Emmanuel Kpot",
    title: "Petroleum Engineer",
    age: 33,
    Phone: 306-339-3978,
    email: "emmail@gmail.com",
    createdAt: Date()
});

const person = new People({

    name: "Ataene Ene",
    title: "Software Engineer",
    age: 33,
    Phone: 306-339-3978,
    email: "emmail@gmail.com",
    createdAt: Date()

    
});
people.save();
person.save();

console.log(people);
console.log(person);


