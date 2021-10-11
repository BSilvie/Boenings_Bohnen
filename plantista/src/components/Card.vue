<template>
  <v-container fluid>
      <v-row>
        <v-col
          v-for="(plant, plantIndex) in plants"
          :key="plantIndex"
        >

        <v-card>
            <!-- Hier muss dann die Moeglichkeit bestehen, dass man eigene Bilder einfügen kann -->
            <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            />

            <status-light
                :status="plant.status"
                class="statusLight"
            />

            <v-card-title>{{plant.name}}</v-card-title>

            <v-btn
                fab
            >
                {{plant.moisturization}}
            </v-btn>

          <v-divider/>
          
          <!-- Actions edit, delete, show data -->
          <v-card-actions>
            <v-spacer />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              fab
              small
              v-bind="attrs"
              v-on="on"
              @click="showData(plant.id)"
            >
              <v-icon dark>mdi-chart-areaspline</v-icon>
            </v-btn>
            </template>
            <span>Daten anzeigen</span>
          </v-tooltip>

          <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              fab
              icon
              small
              v-bind="attrs"
              v-on="on"
              @click="editPlant(plant.id)"
            >
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </template>
              <span>Bearbeiten</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              fab
              small
              v-bind="attrs"
              v-on="on"
              @click="deletePlant(plant.id)"
            >
              <v-icon dark>mdi-delete</v-icon>
            </v-btn>
            </template>
            <span> Löschen </span>
          </v-tooltip>
          </v-card-actions> 
        </v-card>
    </v-col>

    <DeleteSensor
        v-model="deleteSensorModal"
        :sensorId="selectedSensorId"
    />

    <EditSensor
        v-model="editPlantModal"
        :sensorId="selectedSensorId"
    />

    <ShowData
        v-model="showDataModal"
        :sensorId="selectedSensorId"
    />

    </v-row>
  </v-container>
</template>

<script>
import StatusLight from './StatusLight.vue';
import DeleteSensor from '../components/DeleteSensor.vue';
import EditSensor from '../components/EditSensor.vue';
import ShowData from '../components/ShowData.vue';

export default {
    name: 'Card',
    components: {
        StatusLight,
        DeleteSensor,
        EditSensor,
        ShowData
    },
    props: {
        plants: {
            type: Array,
            required: true
        }
    },
    data()
    {
        return {
            deleteSensorModal: false,
            showDataModal: false,
            editPlantModal: false,
            selectedSensorId: ''
        }
    },
    methods: {
        editPlant(id)
        {
            this.selectedSensorId = id;
            this.editPlantModal = true;
        },
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
.statusLight {
    position: absolute;
    right: 10px;
    top: 10px;
}

.left{
    text-align: left;
}

</style>