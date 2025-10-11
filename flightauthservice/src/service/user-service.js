const { Userrepository } = require('../repository/index');
const jwt = require('jsonwebtoken');
const {JWT_KEY}=require('../config/serverconfig')

class Userservice {

    constructor() {
        this.userrepository = new Userrepository();
    }

    async register(data) {
        try {
            //empty data is checked in middelware so no need to pass checker for empty password or email
            const { email, password } = data;
            const result = await this.userrepository.createuser({ email, password });
            console.log(result);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteuser(userid) {
      
        try {
            const result = await this.userrepository.del( userid );
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    checkpassword(plainpassword, encryptedpassword) {
        try {

            const isMatched = bcrypt.compare(plainpassword, encryptedpassword);

            if (!isMatched) {
                console.log('password not matched');
            }

            console.log("password matched");
        } catch (error) {
           throw error;
        }
    }
 //generating jwt token
    genratetoken(user) {
       try {
        const result=jwt.sign(user,JWT_KEY,{expiresIn:'1hr'});
        return result;
       } catch (error) {
        console.log("something went wrong");
        throw error;
       }
    }

    verifytoken(token) {
       try {
        const result=jwt.verify(token,JWT_KEY);
        return result;
       } catch (error) {
        console.log("something went wrong");
        throw error;
       }
    }

    async signin(email,plainpassword){

        try {
            //fetch the user using email

            const user=await this.userrepository.getByEmail(email);
            //compare password
            const passwordmatch=this.checkpassword(plainpassword,user.password);
            if(!passwordmatch){
                console.log("password doesnt match");
                throw error;
            }

            const newjwt=this.genratetoken(user);
            return newjwt;
        } catch (error) {
            throw error;
        }

    }
}

module.exports = Userservice;