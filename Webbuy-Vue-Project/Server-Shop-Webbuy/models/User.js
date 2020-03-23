const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const userSchema = new Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        require: true
    },

    roles: [{ type: Schema.Types.String }],

    posts: [{ type: ObjectId, ref: "Products" }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

const User = new Model('User', userSchema);

User.seedAdminUser = async () => {
   const hashedPass = bcrypt.hashSync('111111', saltRounds)
    try {
        let users = await User.find();
        if (users.length > 0) return;
        
        return User.create({
            email:'admin@abv.bg',
            password: hashedPass,
            roles:['Admin'],
            posts:[]
        });
    } catch (e) {
        console.log(e);
    }
};

module.exports = User;