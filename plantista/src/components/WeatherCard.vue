<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Aktuelles Wetter in {{dataDings.name}} 
        <v-list-item> {{dataDings.weather[0].description}} </v-list-item>
        <v-list-item> Temperatur: {{temp}}°C </v-list-item>
        <v-list-item> Luftfeuchtigkeit: {{dataDings.main.humidity}}% </v-list-item>
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
            const cityID="Erfurt";
            const key = 'c0065c46c8a7a5084dc2b3d53e13f057';
             if (!key) { return; }

            const apiData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&lang=de&APPID=' + key)
            
            this.dataDings  = await apiData.json();
        }
        
    },
    mounted()
    {
        this.weather();
    },
    computed: {
        temp()
        {
            if (!this.dataDings) { return; }
            return Math.round(this.dataDings.main.temp - 273.15);
        }
    }


  }
  
</script> 

<style>

</style>