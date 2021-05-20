const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(db => console.log('Database is connect'))
    .catch(err => console.log(err));
