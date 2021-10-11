<template>
    <div>
        <v-row justify="center">
            <v-dialog
                v-model="value"
                width="500"
            >
                <v-card class="ma-0">
                    <v-card-title class="text-h5">Sensor entfernen</v-card-title>

                    <v-card-text class="text-left">
                        Möchtest du den Sensor mit der ID: {{sensorId}} entfernen?
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
                            Entfernen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>

export default {
    name: 'DeleteSensor',
    props: {
        value: {
            type: Boolean,
            required: true
        },
        sensorId: {
            type: String,
            required: true
        }
    },
    methods: {
        addNewSensor()
        {
            console.log('deletes sensor');
            this.$emit('input', false);
        }
    }
};
</script>