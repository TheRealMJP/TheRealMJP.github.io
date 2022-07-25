const gpuReadUniformChartCtx = document.getElementById('gpu-read-uniform-chart').getContext('2d');
const gpuReadUniformChart = new Chart(gpuReadUniformChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam, Uncached (UPLOAD)',
            'SysRam, Cached',
            'VRAM (Default)',
            'VRAM (NVAPI)'
        ],
        datasets: [{
            label: 'GPU Time in ms (16 MB)',
            data: [
                0.020407,
                0.020898,
                0.020864,
                0.020593,
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
                text: 'GPU Time Reading From a 1 KB Buffer, Uniform Reads (milliseconds)'
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