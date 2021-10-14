module.exports = mongoose => {
    const DataCollection = mongoose.model(
        "dataCollections",
        mongoose.Schema(
            {
                deviceAddress: String,
                sensorData: Array,
                dbVersion: Number
            },
            { timestamps: true}
        )
    )
    return DataCollection;
}