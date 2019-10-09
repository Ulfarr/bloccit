'use strict';
module.exports = (sequelize, DataTypes) => {
  var advertisement = sequelize.define('advertisement', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  advertisement.associate = function(models) {
    // associations can be defined here
  };
  return advertisement;
};