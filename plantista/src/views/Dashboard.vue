<template>
  <div class="dashboard">
    <h1>Dashboard</h1>


    <Card />
  </div>   
</template>

<script>
import Card from '../components/Card.vue';
export default {
    name: 'Dashboard',
    components: {
    Card
}
}
</script>