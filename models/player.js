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
      hpassword: {
        type: DataTypes.STRING,
        allowNull: true
      },
      authlink: {
        type: DataTypes.STRING,
        allowNull: false
      },
      authid: {
        type: DataTypes.STRING,
        allowNull: true
      },
      profileimgurl: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return Player;
  };
  