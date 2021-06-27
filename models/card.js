module.exports = (sequelize, DataTypes) => {
    const Card = sequelize.define("Card", {
      cardnum: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      cardsuite: {
        type: DataTypes.STRING(1),
        allowNull: false
      },
      cardpoint: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
    return Todo;
  };
  