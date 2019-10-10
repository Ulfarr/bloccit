'use strict';
module.exports = (sequelize, DataTypes) => {
  var advertisement = sequelize.define('advertisement', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    advertisementId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "advertisement",
        key: "id",
        as: "advertisementId",
      }
    }
  }, {});
  advertisement.associate = function(models) {
    // associations can be defined here
  };
  return advertisement;
};