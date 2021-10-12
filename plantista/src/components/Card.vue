<template>
    <div>
        <v-card min-height="450">
            <!-- Hier muss dann die Moeglichkeit bestehen, dass man eigene Bilder einfügen kann -->
            <v-img
                :src='plantSource'
                min-width="400"
                min-height="320"
            />

            <status-light
                :status="plant.status"
                class="statusLight"
            />

            <div class="text-overline ma-2 pa-2">
                {{plant.name}} | {{plant.moisturization}} φ
        
                <v-spacer />
                <!-- Actions delete, show data -->
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        fab
                        small
                        v-bind="attrs"
                        v-on="on"
                        @click="$emit('data', plant.id)"
                    >
                        <v-icon dark>mdi-chart-areaspline</v-icon>
                    </v-btn>
                    </template>
                    <span>Daten anzeigen</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        fab
                        small
                        v-bind="attrs"
                        v-on="on"
                        @click="$emit('delete', plant.id)"
                    >
                        <v-icon dark>mdi-delete</v-icon>
                    </v-btn>
                    </template>
                    <span>Löschen</span>
                </v-tooltip>
            </div>
        </v-card>
    </div>
</template>

<script>
import StatusLight from './StatusLight.vue';

export default {
    name: 'Card',
    components: {
        StatusLight
    },
    props: {
        plant: {
            type: Object,
            required: true
        }
    },
    computed: {
        plantSource()
        {
            return `https://source.unsplash.com/400x320/?plant,${this.plant.name}`;
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