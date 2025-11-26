module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surName: {
        type: DataTypes.STRING,
        allowNull : false
      },
      Contact:{
        type: DataTypes.INTEGER,
        allowNull:false
      }
     
   
      
    
    });
    return User;
  };