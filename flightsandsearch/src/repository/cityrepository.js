const { City } = require("../models");

class Cityrepository {
  async createcity(data) {
    try {
      const city = await City.create(data);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async deletecity(cityid) {
    try {
      await City.destroy({
        where: {
          id: cityid,
        },
      });
    } catch (error) {
      throw { error };
    }
  }

  async getcity(cityid) {
    try {
      const city = await City.findByPk(cityid);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async updatecity(cityid, data) {
    const updatedcity = await City.update(data, {
      where: {
        id: cityid,
      },
    });
    return updatedcity;
  }

  //creating airports using city instance

  async createairport({ cityId, airportname,airportaddress }) {
    try {
      const city = await City.findByPk(cityId);

      if (!city) {
        throw new Error(`City with id ${cityId} not found`);
      }
      const airport = await city.createAirport(
        {
          name: airportname,
          address:airportaddress
        }
      );
      return airport;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Cityrepository;
