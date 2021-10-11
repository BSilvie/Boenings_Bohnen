<template>
    <div>
        <v-row justify="center">
            <v-dialog
                v-model="value"
                width="500"
            >
                <v-card class="ma-0">
                    <v-card-title class="text-h5">Sensor hinzufügen</v-card-title>

                    <v-card-text class="text-left">
                        Möchtest du einen Sensor hinzufügen?

                        <v-text-field
                            v-model="sensorId"
                            label="Sensor-Identifikationsnummer"
                            prepend-icon="mdi-counter"
                            required
                        />
                    </v-card-text>

                    <v-divider />

                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            text
                            @click="$emit('input', false)"
                        >
                            Schließen
                        </v-btn>
                        <v-btn
                            color="success"
                            text
                            @click="addNewSensor"
                        >
                            Hinzufügen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'AddSensor',
    props: {
        value: {
            type: Boolean,
            required: true
        }
    },
    data()
    {
        return {
            sensorId: ''
        };
    },
    methods: {
        addNewSensor()
        {
            console.log('adds new sensor with id: ' + this.sensorId);
            this.$emit('input', false);
        }
    }
};
</script>