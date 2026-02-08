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
      categories: ['Afghanistan', 'Deutschland', 'England / Italien', 'Irak', 'Litauen', 'Marokko', 'Polen', 'Russland', 'Spanien', 'Syrien', 'Türkei'],
      series: [{
        name: 'Schüler*innen',
        type: 'bar',
        data: [2, 33, 0, 2, 1, 0, 2, 0, 1, 2, 0]
      }, {
        name: 'Eltern',
        type: 'bar',
        data: [3, 21, 1, 4, 1, 8, 6, 2, 0, 2, 2]
      }]
    }
  }, {
    id: 'chart-2',
    data: {
      categories: ['Christentum', 'Judentum', 'Islam', 'Buddhismus', 'Hinduismus', 'Keine Religion', 'Anderes'],
      series: [{
        name: 'Schüler*innen',
        type: 'bar',
        data: [21, 0, 14, 0, 1, 7, 0]
      }]
    }
  }, {
    id: 'chart-3',
    data: {
      categories: ['Deutschland', 'Indonesien', 'Kamerun', 'Polen', 'Spanien', 'Türkei'],
      series: [{
        name: 'Lehrer*innen',
        type: 'bar', data: [9]
      }, {
        name: 'Eltern',
        type: 'bar',
        data: [5, 1, 1, 1, 1, 1]
      }]
    }
  }, {
    id: 'chart-4',
    data: {
      categories: ['Christentum', 'Judentum', 'Islam', 'Buddhismus', 'Hinduismus', 'Keine Religion', 'Evangelisch', 'Anderes'],
      series: [{
        name: 'Lehrer*innen',
        type: 'bar',
        data: [2, 0, 1, 0, 0, 5, 1, 0]
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