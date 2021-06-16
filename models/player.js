module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define("Player", {
      pName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      hashPassword: {
        type: DataTypes.STRING,
        allowNull: true
      },
      authLink: {
        type: DataTypes.STRING,
        allowNull: false
      },
      authId: {
        type: DataTypes.STRING,
        allowNull: true
      },
      profileImgURL: {
        type: DataTypes.STRING,
        allowNull: true
      }
    });
    return Player;
  };
  