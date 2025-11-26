module.exports = (sequelize, DataTypes) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull:false
      },

    });
    return Blog;
  };