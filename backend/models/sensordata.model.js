module.exports = mongoose => {
    const Sensordata = mongoose.model(
        "sensordata",
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