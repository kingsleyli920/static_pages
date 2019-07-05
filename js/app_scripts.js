var ctx_bar = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx_bar, {
    type: 'bar',
    data: {
        labels: ['12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [1500, 2000, 2500, 3000, 3000, 3500, 4000],
            label: '七日下载数据',
            backgroundColor: [
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
            ],
            borderColor: [
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
                'rgba(240, 227, 90, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                },
                gridLines: {
                    display: true,
                    color: "rgba(111, 122, 146, 1)"
                }
            }]
        },
        maintainAspectRatio: false
    }
});

var ctx_pie = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx_pie, {
    type: 'pie',
    data: {
        labels: ['IOS', 'Android'],
        datasets: [{
            data: [65, 35],
            backgroundColor: [
                'rgba(108, 134, 239, 1)',
                'rgba(239, 227, 89, 1)',
            ],
            borderColor: [
                'rgba(108, 134, 239, 1)',
                'rgba(239,227,89,1)',
            ],
            borderWidth: 1,
        }]
    },
    options: {
        maintainAspectRatio: false
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
            borderColor: [
                'rgba(242, 229, 93, 1)'
            ]
        }, {
            label: '月活跃用户',
            data: [600, 1000, 1100, 1150, 1300, 1550, 1800, 1900, 2100],

            borderColor: [
                'rgba(128, 200, 241,1)'
            ]
        },
        {
            label: '日活跃用户',
            data: [900, 570, 600, 700, 800, 850, 980, 999, 1120],
            borderColor: [
                'rgba(211, 73, 171, 1)'
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
        maintainAspectRatio: false
    }
});