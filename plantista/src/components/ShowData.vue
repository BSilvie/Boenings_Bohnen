<template>
    <div>
        <v-row justify="center">
            <v-dialog
                v-model="value"
                @click:outside="$emit('input', false)"
                @keydown.esc="$emit('input', false)"
                @click.stop.prevent
                width="500"
            >
                <v-card class="ma-0">
                    <v-card-title class="text-h5">Graph zum Sensor</v-card-title>

                    <line-chart :chart-data="chartData" />

                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                            text
                            @click="$emit('input', false)"
                        >
                            Schließen
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
import LineChart from './LineChart';

export default {
    name: 'ShowData',
    components: {
        LineChart
    },
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
    data()
    {
        return {
            chartData: {
                labels: ['Feuchtigkeit', 'Verlauf'],
                datasets: [
                    {
                        label: 'Graphdaten',
                        backgroundColor: '#f87979',
                        data: [555, 575, 475, 375, 565, 574, 374, 574, 574, 233, 245, 265, 650, 459]
                    }
                ]
            }
        }
    }
};
</script>