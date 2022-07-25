const gpuReadBandwidthChartCtx = document.getElementById('gpu-read-bandwidth-chart').getContext('2d');
const gpuReadBandwidthChart = new Chart(gpuReadBandwidthChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam (UPLOAD)',
            'VRAM (Default)',
            'VRAM (NVAPI)'
        ],
        datasets: [{
            label: 'Memory bandwidth in MB/s',
            data: [
                12429,
                397634,
                381462,
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
                text: 'GPU Bandwith for Reading From a 64 MB Buffer, 4M Threads (MB/s)'
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