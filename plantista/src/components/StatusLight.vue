<template>
    <v-btn
        :class="{
            'green': status === 2,
            'orange': status === 1,
            'red': status === 0
        }"
        fab
        dark
        small
      >
        <v-icon>{{iconName}}</v-icon>
      </v-btn>
</template>

<script>
export default {
    name: 'StatusLight',
    props: {
        status: {
            type: Number,
            default: 0
            /**
             * 0 = down
             * 1 = interaction needed
             * 2 = everything allright
             */
        }
    },
    data()
    {
        return {
            mdiIconNames: [
                'mdi-thumb-down',
                'mdi-exclamation',
                'mdi-thumb-up'
            ]
        };
    },
    computed: {
        iconName()
        {
            return this.mdiIconNames[this.status];
        }
    }
};
</script>

<style lang="scss" scoped>
.green {
    background-color: rgb(32, 178, 69) !important;
}

.red {
    background-color: rgb(178, 32, 32) !important;
}

.orange {
    background-color: rgb(207, 164, 46) !important;
}
</style>