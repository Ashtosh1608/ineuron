const mongoose = require('mongoose')
const DB = process.env.Database;

mongoose.connect(DB).then(()=> {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=> {
//     console.log(`connection successful`);
// }).catch((err) => console.log(`no connection`));
