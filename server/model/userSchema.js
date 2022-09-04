const mongooose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required:true
    },
    cpassword: {
        type: String,
        required:true
    },
    // comments:[{
    //     text:String,
    //     postedBy:{type:ObjectId,ref:"User"}
    // }],
    // postedBy:{
    //     type:ObjectId,
    //     ref:"User"
    // },
    tokens: [
        {
            token: {
                type: String,
                required:true
            }
        }
    ]
})


// we are hashing the password

userSchema.pre('save', async function (next) {
    console.log("hi from inside")
    if (this.isModified('password')) {
        
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// we are generating token
userSchema.methods.generateAuthToken = async function () {
    try{
        let token;
       token = jwt.sign({_id:this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}


// collection creation
const User = mongooose.model ('USER', userSchema) ;

module.exports = User;