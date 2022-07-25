const gpuReadSizesChartCtx = document.getElementById('gpu-read-sizes-chart').getContext('2d');
const gpuReadSizesChart = new Chart(gpuReadSizesChartCtx, {
    type: 'line',
    data: {
        labels: [
            '64 KB',
            '128 KB',
            '192 KB',
            '256 KB',
            '320 KB',
            '384 KB',
            '448 KB',
            '512 KB',
        ],
        datasets: [
            {
                label: 'SysRam, Uncached (UPLOAD)',
                data: [
                    0.033476,
                    0.03972,
                    0.044442,
                    0.049475,
                    0.054689,
                    0.059189,
                    0.063875,
                    0.06845,
                ],
                backgroundColor: graphBackgroundColors[0],
                borderColor: graphBorderColors[0],
                borderWidth: 1
            },
            {
                label: 'VRAM (Default)',
                data: [
                    0.027567,
                    0.029534,
                    0.029152,
                    0.029275,
                    0.028929,
                    0.028679,
                    0.028831,
                    0.02875,
                ],
                backgroundColor: graphBackgroundColors[2],
                borderColor: graphBorderColors[2],
                borderWidth: 1
            },
            {
                label: 'VRAM (NVAPI)',
                data: [
                    0.028695,
                    0.027747,
                    0.02752,
                    0.027676,
                    0.027518,
                    0.027487,
                    0.027473,
                    0.027503,
                ],
                backgroundColor: graphBackgroundColors[3],
                borderColor: graphBorderColors[3],
                borderWidth: 1
            },
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'GPU Time Reading From Various Size Buffers, 1M Threads (milliseconds)'
            },
            legend: {
                display: true,
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