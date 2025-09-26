'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:"Chhatrapati Shivaji Maharaj International Airport",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date()  
    },
    
    {
      name:"Navi Mumbai International Airport ",
      cityId:1,
      createdAt:new Date(),
      updatedAt:new Date() 
    },
     {
      name:"Kempegowda International Airport",
      cityId:20,
      createdAt:new Date(),
      updatedAt:new Date() 
    },

     {
      name:"Jindal Vijayanagar Airport" ,
      cityId:20,
      createdAt:new Date(),
      updatedAt:new Date() 
    },

     {
      name:"Mysore Airport",
      cityId:20,
      createdAt:new Date(),
      updatedAt:new Date() 
    },
     {
      name:"Kuvempu Airport",
      cityId:20,
      createdAt:new Date(),
      updatedAt:new Date() 
    },
     {
      name:"Jagadguru Sant Tukaram Maharaj Airport",
      cityId:4,
      createdAt:new Date(),
      updatedAt:new Date() 
    },
     {
      name:"Jaipur International Airport  ",
      cityId:21,
      createdAt:new Date(),
      updatedAt:new Date() 
    },
    {
      name:"Chennai International Airport   ",
      cityId:19,
      createdAt:new Date(),
      updatedAt:new Date() 
    },{
      name:"Chennai Parandur Airport ",
      cityId:19,
      createdAt:new Date(),
      updatedAt:new Date() 
    },{
      name:"Surat Airport ",
      cityId:17,
      createdAt:new Date(),
      updatedAt:new Date() 
    },{
      name:"Dr. Babasaheb Ambedkar International Airport ",
      cityId:18,
      createdAt:new Date(),
      updatedAt:new Date() 
    },{
      name:"Jodhpur Airport ",
      cityId:22,
      createdAt:new Date(),
      updatedAt:new Date() 
    }
   ])


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
