<template>
    <v-col>
        <v-card min-height="450">
            <v-img
                src="https://source.unsplash.com/400x320/?weather"
                min-width="400"
                min-height="320"
            />

            <div
                v-if="weatherData"
                class="text-overline ma-2 pa-2"
            >
                {{weatherData.name}} | {{weatherData.weather[0].description}} | {{currentTemperate}}°C | {{weatherData.main.humidity}}%
            </div>
        </v-card>
    </v-col>
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