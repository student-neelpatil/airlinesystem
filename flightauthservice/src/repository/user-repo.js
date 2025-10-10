const { User } = require('../models');



class Userrepository{

    //create method

    async createuser(data) {
        try {
            const result = await User.create(data);
            return result;
        } catch (error) {
            throw error;
        }
    }


    async getByID(userid) {
        try {
            const result = await User.findByPk(userid);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async del(userid) {
        try {
            const result = await User.destroy({
                where: {
                    id: userid,
                }
            }
            )
            return result;
        } catch (error) {
            throw error;
        }
    }





}

module.exports = Userrepository;