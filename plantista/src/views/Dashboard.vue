<template>
  <div class="dashboard">
    <h1>Dashboard</h1>

    <Weather-card />
    <v-divider class="mx-4, cardDivider"></v-divider>
    <Card />
  </div>   
</template>

<script>
import Card from '../components/Card.vue';
import WeatherCard from '../components/WeatherCard.vue';
export default {
    name: 'Dashboard',
    components: {
        Card,
        WeatherCard
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
</style>