const { where } = require('sequelize');
const { Airport } = require('../models')
const { City } = require('../models')


class Airportrepo {
  //creating airports using city instance
  async createairport({ cityId, airportname }) {
    try {
      const city = await City.findByPk(cityId);

      if (!city) {
        throw new Error(`City with id ${cityId} not found`);
      }
      const airport = await city.createAirport(
        {
          name: airportname
        }
      );
      return airport;
    } catch (error) {
      throw error;
    }
  }

  async deleteairport(cityId) {
    try {

      await Airport.destroy({
        where: {
          id: cityId
        }
      });

      return true;

    } catch (error) {
      throw error
    }
  }
  async updateairports(Id, data) {
    try {

      const {airportname}=data;
     
      const airport = await Airport.update(airportname, {
        where: {
          id:Id
        }
      })
      console.log("Updating airport:", Id, "with name:", airportname);

      return airport;

    } catch (error) {
      throw error;
    }
  }
  async getairport(cityId) {
    try {
      const city = await City.findByPk(cityId);

      const airports = await city.getAirports();
      return airports;
    } catch (error) {
      throw error;
    }
  }
}




module.exports = Airportrepo;