const commonOptions = {
  grid: {
    bottom: '15%',
    containLabel: true,
    left: '3%',
    right: '4%'
  },
  label: {
    position: 'top',
    show: true
  },
  legend: {
    bottom: 0,
    show: true,
    type: 'scroll'
  },
  yAxis: {
    type: 'value'
  },
  tooltip: {
    axisPointer: {
      type: 'shadow'
    },
    trigger: 'axis'
  }
};

const chartsConfig = [{
    id: 'chart-1',
    data: {
      categories: ['Deutschland', 'Polen', 'Türkei'],
      series: [{
        name: 'Schüler*innen',
        type: 'bar',
        data: [3, 1, 0]
      }, {
        name: 'Eltern',
        type: 'bar',
        data: [2, 1, 1]
      }]
    }
  }, {
    id: 'chart-2',
    data: {
      categories: ['Christentum', 'Judentum', 'Islam', 'Buddhismus', 'Hinduismus', 'Keine Religion', 'Anderes'],
      series: [{
        name: 'Schüler*innen',
        type: 'bar',
        data: [1, 0, 1, 0, 0, 2, 0]
      }]
    }
  }, {
    id: 'chart-3',
    data: {
      categories: ['Deutschland'],
      series: [{
        name: 'Lehrer*innen',
        type: 'bar', data: [0]
      }, {
        name: 'Eltern',
        type: 'bar',
        data: [0, 0]
      }]
    }
  }, {
    id: 'chart-4',
    data: {
      categories: ['Christentum', 'Judentum', 'Islam', 'Buddhismus', 'Hinduismus', 'Keine Religion', 'Anderes'],
      series: [{
        name: 'Lehrer*innen',
        type: 'bar',
        data: [0, 0, 0, 0, 0, 0, 0]
      }]
    }
  }
];

function initializeChart(config) {
  const chartElement = document.getElementById(config.id);
  if (!chartElement) return null;
  const chart = echarts.init(chartElement);
  const option = {
    ...commonOptions,
    xAxis: {
      type: 'category',
      data: config.data.categories,
      axisLabel: {
        interval: 0,
        rotate: 0,
        width: null
      },
      axisTick: {
        alignWithLabel: true
      }
    },
    series: config.data.series
  };

  chart.setOption(option);

  function adjustChartForMobile() {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      const mobileOptions = {
        grid: {
          left: '8%',
          right: '5%',
          bottom: '10%',
          top: '10%',
          containLabel: true
        },
        legend: {
          show: true,
          type: 'scroll',
          bottom: 0,
          orient: 'horizontal',
          padding: [10, 0, 0, 0]
        }
      };
      chart.setOption(mobileOptions);
    }
  }
  adjustChartForMobile();
  return chart;
}

const charts = chartsConfig.map(config => initializeChart(config)).filter(Boolean);

window.addEventListener('resize', () => {
  charts.forEach(chart => {
    if (chart) {
      chart.resize();
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        const mobileOptions = {
          grid: {
            left: '8%',
            right: '5%',
            bottom: '25%',
            top: '10%',
            containLabel: true
          },
          legend: {
            type: 'scroll',
            bottom: 0,
            orient: 'horizontal',
            padding: [10, 0, 0, 0]
          }
        };
        chart.setOption(mobileOptions);
      }
    }
  });
});

function collapseNavbar() {
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse).toggle();
  }
}