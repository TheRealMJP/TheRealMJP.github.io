const gpuReadChartCtx = document.getElementById('gpu-read-chart').getContext('2d');
const gpuReadChart = new Chart(gpuReadChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam (UPLOAD)',
            'VRAM (Default)',
            'VRAM (NVAPI)'
        ],
        datasets: [{
            label: 'GPU Time in ms (64 MB)',
            data: [
                5.149085,
                0.160952,
                0.167775,
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
                text: 'GPU Time Reading From a 64 MB Buffer, 4M threads (milliseconds)'
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