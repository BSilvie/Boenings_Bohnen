module.exports = {
    url: "mongodb://"
            + process.env.MONGODB_USERNAME
            + ":"
            + process.env.MONGODB_PASSWORD
            + "@"
            + process.env.MONGODB_HOST 
            + ":"
            + process.env.MONGODB_EXPOSE_PORT 
            + "/"
            + process.env.MONGODB_DATABASE
};