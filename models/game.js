module.exports = (sequelize, DataTypes) => {
    const Game = sequelize.define("Game", {
      teamid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      targetbid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      bidowner: {
        type: DataTypes.STRING,
        allowNull: true
      },
      bidteam: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gamescore: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      gamewinner: {
        type: DataTypes.STRING,
        allowNull: true
      },
      gametype: {
        type: DataTypes.STRING,
        allowNull: false
      },
      carddisttype: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      bidtyppe: {
        type: DataTypes.STRING,
        allowNull: false
      },
      norounds: {
        type: DataTypes.STRING,
        allowNull: false
      },
      maxbix: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      minbid: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
    });
    return Todo;
  };
  