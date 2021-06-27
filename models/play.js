module.exports = (sequelize, DataTypes) => {
    const Play = sequelize.define("Play", {
      gameid: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roundnum: {
        type: DataTypes.STRING,
        allowNull: false
      },
      roundwinner: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pointscored: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      islastround: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
    });
    return Play;
  };
  