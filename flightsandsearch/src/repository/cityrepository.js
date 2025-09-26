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
}

module.exports = Cityrepository;
