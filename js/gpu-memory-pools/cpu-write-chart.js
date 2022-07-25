const cpuWriteChartCtx = document.getElementById('cpu-write-chart').getContext('2d');
const cpuWriteChart = new Chart(cpuWriteChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam, Uncached (UPLOAD)',
            'SysRam, Cached',
            'VRAM, Uncached (NVAPI)'
        ],
        datasets: [{
            label: 'CPU Write Time in ms (16 MB)',
            data: [
                1.007844,
                1.009203,
                1.411328
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
                text: 'CPU Time Filling a 16 MB Buffer (milliseconds)'
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