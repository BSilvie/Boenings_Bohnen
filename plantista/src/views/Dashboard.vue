<template>
    <v-container fluid>
    <div class="dashboard">
        <h1>Dashboard</h1>

        <v-container fluid>
            <v-row>
                <weather-card />
                <v-col
                    v-for="(plant, plantIndex) in plants"
                    :key="plantIndex"
                >
                    <card
                        :plant="plant"
                        @delete="deletePlant"
                        @data="showData"
                    />
                </v-col>
            </v-row>
        </v-container>

        <add-sensor v-model="addSensorModal" />

        <DeleteSensor
            v-model="deleteSensorModal"
            :sensorId="selectedSensorId"
        />

        <ShowData
            v-model="showDataModal"
            :sensorId="selectedSensorId"
        />

        <v-fab-transition>
            <v-btn
                class="fab-button"
                @click="addSensorModal = true"
                color="red"
                dark
                large
                fab
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-fab-transition>
    </div> 
    </v-container>
</template>

<script>
import Card from '../components/Card.vue';
import WeatherCard from '../components/WeatherCard.vue';
import AddSensor from '../components/AddSensor.vue';
import DeleteSensor from '../components/DeleteSensor.vue';
import ShowData from '../components/ShowData.vue';

export default {
    name: 'Dashboard',
    components: {
        Card,
        WeatherCard,
        AddSensor,
        DeleteSensor,
        ShowData
    },
    data()
    {
        return {
            deleteSensorModal: false,
            showDataModal: false,
            selectedSensorId: '',
            addSensorModal: false,
            plants: [
                {
                    id: "sampleId123747823548",
                    name: "Jan",
                    moisturization: 525,
                    status: 0
                },
                {
                    id: "sampleId8l3lfnfn0h",
                    name: "Silvie",
                    moisturization: 221,
                    status: 2
                },
                {
                    id: "sampleId=03ld8enfe9fn",
                    name: "Melanie",
                    moisturization: 432,
                    status: 2
                },
                {
                    id: "sampleIdjannmmvn3orj",
                    name: "Alex",
                    moisturization: 531,
                    status: 2
                },
                {
                    id: "sampleIdjkodj9H)§Hi",
                    name: "Manuel",
                    moisturization: 553,
                    status: 1
                }
            ]
        };
    },
    methods: {
        deletePlant(id)
        {
            this.selectedSensorId = id;
            this.deleteSensorModal = true;
        },
        showData(id)
        {
            this.selectedSensorId = id;
            this.showDataModal = true;
        }
    }
}
</script>

<style>
.v-card {
    margin-left: 25px;
    margin-bottom: 25px;
}

.cardDivider {
margin-bottom: 25px;
}

.fab-button {
    position: fixed;
    right: 20px;
    bottom: 20px;
}
</style>