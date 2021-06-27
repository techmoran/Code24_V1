module.exports = (sequelize, DataTypes) => {
    const Hand = sequelize.define("Hand", {
      playerid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      teamid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      gameid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cards: {
        type: DataTypes.JSON,
        allowNull: false
      },
      isbidwinner: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
    return Hand;
  };
  