const {Userrepository}=require('../repository/index');

class Userservice{

    constructor(){
        this.userrepository = new Userrepository();
    }

    async register(data){
        try {
            //empty data is checked in middelware so no need to pass checker for empty password or email
            const {email,password}=data;
             const result=await this.userrepository.createuser({email,password});
             console.log(result);
             return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

      async searchById(data){
        const {userid}=data;
        try {
            const result=await this.userrepository.getByID({userid});
            return result;
        } catch (error) {
             console.log(error);
            throw error;
        }

    }

    checkpassword(plainpassword,encryptedpassword){

        const isMatched=bcrypt.compare(plainpassword,encryptedpassword);

        if(!isMatched){
            console.log('password not matched');
        }
        
        console.log("password matched");
    }
}

module.exports=Userservice;