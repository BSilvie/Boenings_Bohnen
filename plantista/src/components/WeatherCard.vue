<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Wetter
        </div>
        <div v-if="dataDings" class="weather">
            {{dataDings.weather}}
        </div>

      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
  export default {
    name: 'WeatherCard',
    data()
    {
        return {
            dataDings: null
        };
    },
    methods: {
        async weather () {   
            const cityID = "Berlin";
            const key = '';
            const apiData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&APPID=' + key)
            
            this.dataDings  = await apiData.json();
        }
    },
    mounted()
    {
        this.weather();
    }
  }
  
</script> 

<style>



</style>