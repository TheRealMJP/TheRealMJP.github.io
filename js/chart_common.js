const whiteBackgroundPlugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const graphBackgroundColors = [
    'rgba(255, 99, 132, 0.25)',
    'rgba(54, 162, 235, 0.25)',
    'rgba(255, 206, 86, 0.25)',
    'rgba(75, 192, 192, 0.25)',
    'rgba(153, 102, 255, 0.25)',
    'rgba(255, 159, 64, 0.25)'
];

const graphBorderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];