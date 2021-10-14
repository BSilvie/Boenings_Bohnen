module.exports = mongoose => {
    const DBVersion = mongoose.model(
        "dbversions",
        mongoose.Schema(
            {
                dbVersion: Number
            },
            { timestamps: true}
        )
    )
    return DBVersion;
}