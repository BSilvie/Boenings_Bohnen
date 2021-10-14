module.exports = mongoose => {
    const Users = mongoose.model(
        "users",
        mongoose.Schema(
            {
                username: {
                    type: String,
                    unique: true
                },
                email: {
                    type: String,
                    unique: true
                },
                password: String,
                location: String
            },
            { timestamps: true}
        )
    )
    return Users;
}