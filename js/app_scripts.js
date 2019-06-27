var ctx_bar = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx_bar, {
    type: 'bar',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [1500, 2000, 2500, 3000, 3000, 3500, 4000],
            label: '七日下载数据',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        scales: {
            xAxes: [{
                ticks: {
                    maxRotation: 90,
                    minRotation: 80
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx_pie = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx_pie, {
    type: 'pie',
    data: {
        labels: ['Android', 'IOS'],
        datasets: [{
            data: [35, 65],
            backgroundColor: [
                'rgba(239, 227, 89, 0.5)',
                'rgba(108, 134, 239, 0.2)',
            ],
            borderColor: [
                'rgba(239,227,89,0.5)',
                'rgba(108, 134, 239, 0.2)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        responsive: false,
    }
});

var ctx_line = document.getElementById('myLineChart');
var myLineChart = new Chart(ctx_line, {
    type: 'line',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18', '19', '20'],
        datasets: [{
            label: '安装总量',
            data: [1900, 2100, 2000, 2400, 2600, 3000, 3200, 3600, 3900],
            backgroundColor: [
                'rgba(242, 229, 93, 0.2)'
            ],
            borderColor: [
                'rgba(242, 229, 93, 0.2)'
            ]
        }, {
            label: '月活跃用户',
            data: [600, 1000, 1100, 1150, 1300, 1550, 1800, 1900, 2100],
            backgroundColor: [
                'rgba(128, 200, 241, 0.2)'
            ],
            borderColor: [
                'rgba(128, 200, 241, 0.2)'
            ]
        },
        {
            label: '日活跃用户',
            data: [900, 570, 600, 700, 800, 850, 980, 999, 1120],
            backgroundColor: [
                'rgba(211, 73, 171, 0.2)'
            ],
            borderColor: [
                'rgba(211, 73, 171, 0.2)'
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
        }
    }
});