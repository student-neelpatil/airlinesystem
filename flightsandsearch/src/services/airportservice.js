const { Cityrepository } = require('../repository/index')

class Airportservice {
    constructor() {
        this.cityrepository = new Cityrepository();
    }

    async createairports(data) {
        try {
            const { cityId, airportname } = data;

            if (!cityId || !airportname) {
                throw new Error("cityId, airportName, and airportAddress are required");
            }

            const res = await this.cityrepository.createairport({cityId,airportname});
            return res;
        } catch (error) {
            console.log(error);
            throw error;

        }
    }

    // async updatecity(cityid,data){
    //     try {
    //         const res=await this.cityrepository.updatecity(cityid,data);
    //         return res;
    //     } catch (error) {
    //        console.log(error)  
    //     }
    // }


    // async getcity(cityid){
    //     try {
    //         const res=await this.cityrepository.getcity(cityid);
    //         return res;
    //     } catch (error) {
    //        console.log(error)  
    //     }
    // }

    // async deletecity(cityid){
    //     try {
    //         const res=await this.cityrepository.deletecity(cityid);
    //         return res;
    //     } catch (error) {
    //        console.log(error)  
    //     }
    // }
};

module.exports = Airportservice;
