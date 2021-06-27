module.exports = (sequelize, DataTypes) => {
    const Play = sequelize.define("Play", {
      text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return Todo;
  };
  