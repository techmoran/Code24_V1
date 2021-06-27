module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define("Team", {
      teamname: {
        type: DataTypes.STRING,
        allowNull: false
      },
      playerid: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
    return Team;
  };
  