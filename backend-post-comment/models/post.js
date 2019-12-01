module.exports = (sequelize, DataType) => {
  const post = sequelize.define('post', {
    author: {
      type: DataType.STRING(60)
    },
    text: {
      type: DataType.STRING(500)
    },
    picture: {
      type: DataType.STRING(300)
    }
  })
  post.associate = function (models) {
    post.hasMany(models.comment, {foreignKey: 'post_id'})
  }

  return post
}