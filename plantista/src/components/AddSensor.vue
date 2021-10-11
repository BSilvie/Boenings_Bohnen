<template>
    <div>
        <v-row justify="center">
            <v-dialog
                v-model="value"
                width="500"
            >
                <v-card class="ma-0">
                    <v-card-title class="text-h5 grey lighten-2">Sensor hinzufügen</v-card-title>

                    <v-card-text>
                    Möchtest </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="primary"
                        text
                        @click="$emit('input', false)"
                    >
                        I accept
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
    watch: {
        value()
        {
            console.log(this.value);
        }
    }
};
</script>