<template>
    <v-container fluid>
    <div class="dashboard">
        <h1>Dashboard</h1>

        <Weather-card />

        <v-divider class="mx-4, cardDivider" />

        <Card
            :plants="plants"
        />

        <AddSensor v-model="addSensorModal" />

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

export default {
    name: 'Dashboard',
    components: {
        Card,
        WeatherCard,
        AddSensor
    },
    data()
    {
        return {
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