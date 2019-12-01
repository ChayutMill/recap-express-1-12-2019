module.exports = (sequelize, DataType) => {
  const comment = sequelize.define('comment', {
    author:{
      type:DataType.STRING(60)
    },
    text:{
      type:DataType.STRING(500)
    }
  })
  return comment
}