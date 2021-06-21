module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
      pname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      authlink: {
        type: DataTypes.STRING,
        allowNull: false
      },
      authid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imgurl: {
        type: DataTypes.STRING,
        allowNull: true
      },
      totalpoint: {
        type: DataTypes.STRING,
        allowNull: false
      },
      islive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
    return Player;
  };
  