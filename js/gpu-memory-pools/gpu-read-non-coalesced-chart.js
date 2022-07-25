const gpuReadNonCoalescedChartCtx = document.getElementById('gpu-read-non-coalesced-chart').getContext('2d');
const gpuReadNonCoalescedChart = new Chart(gpuReadNonCoalescedChartCtx, {
    type: 'bar',
    data: {
        labels: [
            'SysRam (UPLOAD)',
            'VRAM (Default)',
            'VRAM (NVAPI)'
        ],
        datasets: [{
            data: [
                17.008788,
                0.621734,
                0.625759,
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
                text: 'GPU Time Reading From a 16 MB Buffer, Non-Coalesced Reads, 4M Threads (milliseconds)'
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