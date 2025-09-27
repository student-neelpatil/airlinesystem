const { Cityrepository } = require('../repository/index')
const {Airportrepo}=require('../repository/index')

class Airportservice {
    constructor() {
        this.cityrepository = new Cityrepository();
        this.airportrepo=new Airportrepo();

    }

    async createairports(data) {
        try {
            const { cityId, airportname } = data;

            if (!cityId || !airportname) {
                throw new Error("cityId, airportName, and airportAddress are required");
            }

            const res = await this.airportrepo.createairport({cityId,airportname});
            return res;
        } catch (error) {
            console.log(error);
            throw error;

        }
    }

   


    async getairports(cityId){
        try {
            const res=await this.airportrepo.getairport(cityId);
            return res;
        } catch (error) {
           console.log(error) ;
           throw error; 
            
        }
    }

    async updateairports(Id,data){
        try {

            const [airport]=await this.airportrepo.updateairports(Id,data);
            return airport;
            
        } catch (error) {
            throw error;
        }
    }

    async deleteairport(cityid){
        try {
            const res=await this.airportrepo.deleteairport(cityid);
            return res;
        } catch (error) {
           console.log(error)  
        }
    }
};

module.exports = Airportservice;
