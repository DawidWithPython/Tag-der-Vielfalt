const chart1 = echarts.init(document.getElementById('chart-1'));
const option1 = {
    xAxis: {
        type: 'category',
        data: ['Deutschland', 'Russland', 'Türkei']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [12, 8, 9]
    }]
};
chart1.setOption(option1);

const chart2 = echarts.init(document.getElementById('chart-2'));
const option2 = {
    xAxis: {
        type: 'category',
        data: ['Christentum', 'Judentum', 'Islam']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [12, 8, 9]
    }]
};
chart2.setOption(option2);

const chart3 = echarts.init(document.getElementById('chart-3'));
const option3 = {
    xAxis: {
        type: 'category',
        data: ['Deutschland', 'Russland', 'Türkei']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [12, 8, 9]
    }]
};
chart3.setOption(option3);

const chart4 = echarts.init(document.getElementById('chart-4'));
const option4 = {
    xAxis: {
        type: 'category',
        data: ['Christentum', 'Judentum', 'Islam']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        type: 'bar',
        data: [12, 8, 9]
    }]
};
chart4.setOption(option4);