const { Cityrepository }=require('../repository/index')

class Cityservice{
    constructor(){
        this.cityrepository=new Cityrepository();
    }

    async createcity(data){
        try {
            const res=await this.cityrepository.createcity(data);
            return res;
        } catch (error) {
           console.log(error)  
        }
    }

    async updatecity(cityid,data){
        try {
            const res=await this.cityrepository.updatecity(cityid,data);
            return res;
        } catch (error) {
           console.log(error)  
        }
    }


    async getcity(cityid){
        try {
            const res=await this.cityrepository.getcity(cityid);
            return res;
        } catch (error) {
           console.log(error)  
        }
    }

    async deletecity(cityid){
        try {
            const res=await this.cityrepository.deletecity(cityid);
            return res;
        } catch (error) {
           console.log(error)  
        }
    }
};

module.exports=Cityservice;
