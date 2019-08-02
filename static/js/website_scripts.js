var ctx_line = document.getElementById('myLineChart');
var myLineChart = new Chart(ctx_line, {
    type: 'line',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            label: '安装总量',
            data: [500, 2011, 2690, 3410, 4320, 4671, 5893],
            borderColor: [
                'rgba(242, 229, 93, 1)'
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        maintainAspectRatio: false,
        responsive: false
    }
});