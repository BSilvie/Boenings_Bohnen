<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
        <v-list-item-content>
            <div
                v-if="weatherData"
                class="text-overline mb-4"
            >
                Aktuelles Wetter in {{weatherData.name}} 
                <v-list-item> {{weatherData.weather[0].description}} </v-list-item>
                <v-list-item> Temperatur: {{currentTemperate}}°C </v-list-item>
                <v-list-item> Luftfeuchtigkeit: {{weatherData.main.humidity}}% </v-list-item>
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
            weatherData: null
        };
    },
    methods: {
        async weather ()
        {
            const cityID = "Erfurt";
            const key = process.env.VUE_APP_WEATHER_API_KEY;

            if (!key) { return; }
            
            const apiData = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityID + '&APPID=' + key)
            
            this.weatherData  = await apiData.json();
            console.log(this.weatherData);
        },
    },
    computed: {
        currentTemperate()
        {
            if (!this.weatherData) { return; }
            return Math.round(this.weatherData.main.temp - 273.15);
        }
    },
    mounted()
    {
        this.weather();
    }
  }
  
</script>