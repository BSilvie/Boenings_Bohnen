module.exports = mongoose => {
    const Sensordata = mongoose.model(
        "sensordatas",
        mongoose.Schema(
            {
                dataValue: String,
                dataType: String,
                deviceAddress: String
            },
            { timestamps: true}
        )
    )
    return Sensordata;
}