const cpuReadChartCtx = document.getElementById('cpu-read-chart').getContext('2d');
const cpuReadChart = new Chart(cpuReadChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam, Uncached (UPLOAD)',
            'SysRam, Cached',
            'VRAM, Uncached (NVAPI)'
        ],
        datasets: [{
            label: 'CPU Read Time in ms (16 MB)',
            data: [
                4.128969,
                0.068203,
                26.659859
            ],
            backgroundColor: graphBackgroundColors,
            borderColor: graphBorderColors,
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        plugins: {
            title: {
                display: true,
                text: 'CPU Time Reading From a 16 MB Buffer (milliseconds)'
            },
            legend: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
    plugins: [ whiteBackgroundPlugin ],
});