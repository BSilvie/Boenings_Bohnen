import { Line } from 'vue-chartjs';

export default {
    extends: Line,
    props: {
        chartData: {
            type: Object,
            required: true
        },
        options: {
            type: Array,
            default: null
        }
    },
    mounted ()
    {
        this.renderChart(this.chartData, this.options);
    }
}