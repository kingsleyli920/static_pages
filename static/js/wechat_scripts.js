
var ctx_line = document.getElementById('myLineChart');
var myLineChart = new Chart(ctx_line, {
    type: 'line',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            label: '微信七日趋势（6.12 - 6.18）',
            data: [500, 2011, 2690, 3410, 4320, 4671, 5893],
            borderColor: [
                'rgba(239, 230, 94, 1)',
                'rgba(239, 230, 94, 1)',
                'rgba(239, 230, 94, 1)',
                'rgba(239, 230, 94, 1)',
                'rgba(239, 230, 94, 1)',
                'rgba(239, 230, 94, 1)'
            ],
            borderWidth: 1
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
        responsive:false
    }
});

var ctx_pie1 = document.getElementById("myPieChart1");
var myPieChart1 = new Chart(ctx_pie1, {
    type: 'pie',
    data: {
        labels: ['裂变式传播', '粉丝转发', '线下活动'],
        datasets: [{
            data: [55, 30, 15],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        cutoutPercentage: 40,
        responsive:false
    },
    
});

