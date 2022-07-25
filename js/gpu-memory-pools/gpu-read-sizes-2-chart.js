const gpuReadSizesChart2Ctx = document.getElementById('gpu-read-sizes-chart2').getContext('2d');
const gpuReadSizes2Chart = new Chart(gpuReadSizesChart2Ctx, {
    type: 'line',
    data: {
        labels: [
            '1.0 MB',
            '2.0 MB',
            '3.0 MB',
            '4.0 MB',
            '5.0 MB',
            '6.0 MB',
            '7.0 MB',
            '8.0 MB',
            '9.0 MB',
            '10.0 MB',
            '11.0 MB',
            '12.0 MB',
            '13.0 MB',
            '14.0 MB',
            '15.0 MB',
            '16.0 MB',
        ],
        datasets: [
            {
                label: 'SysRam (UPLOAD)',
                data: [
                    0.105419,
                    0.181732,
                    0.25968,
                    0.397999,
                    1.28456,
                    1.284665,
                    1.285623,
                    1.285478,
                    1.289273,
                    1.284126,
                    1.285495,
                    1.283658,
                    1.283021,
                    1.284826,
                    1.283082,
                    1.282742,
                ],
                backgroundColor: graphBackgroundColors[0],
                borderColor: graphBorderColors[0],
                borderWidth: 1
            },
            {
                label: 'VRAM (Default)',
                data: [
                    0.028331,
                    0.032088,
                    0.033215,
                    0.034339,
                    0.045872,
                    0.045458,
                    0.045614,
                    0.045763,
                    0.045607,
                    0.045693,
                    0.04586,
                    0.045573,
                    0.045923,
                    0.045414,
                    0.045835,
                    0.04586,

                ],
                backgroundColor: graphBackgroundColors[2],
                borderColor: graphBorderColors[2],
                borderWidth: 1
            },
            {
                label: 'VRAM (NVAPI)',
                data: [
                    0.02916,
                    0.028478,
                    0.036251,
                    0.042407,
                    0.051682,
                    0.051676,
                    0.05161,
                    0.05168,
                    0.05162,
                    0.051683,
                    0.051692,
                    0.051756,
                    0.051774,
                    0.051714,
                    0.051794,
                    0.051638,
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