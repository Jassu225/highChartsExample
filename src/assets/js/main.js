Highcharts.chart('chart', {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        backgroundColor: '#ddd'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    tooltip: {
        enabled: false
    },
    xAxis: {
        gridLineWidth: 1,
        gridLineColor: '#88888866',
        title: {
            enabled: true,
            text: '<b>BRAND EQUITY % CHANGE</b>'
        },
        gridZIndex: -10,
        startOnTick: true,
        endOnTick: true,
        max: 3.5,
        tickColor: '#777',
        // minorTicks: true,
        // minorTickInterval: 10,
        // minorTickWidth: 1,
        // minorTickColor: 'black',
        // minorTickLength: 10
    },
    yAxis: {
        title: {
            text: '<b style="font-size: 18px;">PRICE ELASTICITY</b>'
        },
        gridZIndex: -10,
        gridLineWidth: 1,
        gridLineColor: '#88888866',
        tickColor: '#777',
        tickWidth: 1
        // minorTicks: true,
        // minorTickInterval: 10,
        // minorTickWidth: 1,
        // minorTickColor: 'black',
        // minorTickLength: 10
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 9,
                lineWidth: 4,
                states: {
                    hover: {
                        enabled: false,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    enabled: false,
                    marker: {
                        enabled: false
                    }
                }
            }
        },
        series: {
            dataLabels: {
                enabled: true,
                align: 'left',
                format: '{series.name} <br /> {point.name}',
                backgroundColor: 'white',
                borderRadius: 4,
                color: 'black',
                zIndex: -5,
                allowOverlap: true,
                fontWeight: '200'
            }
        }
    },
    series: [
        {
            name: 'OPPORTUNITY - 7',
            color: 'green',
            marker: {
                symbol: 'url(assets/images/legend-symbol-green.svg)'
            },
            data: [
            ]
        },
        {
            name: 'POTENTIAL OPPORTUNITY - 8',
            color: 'yellow',
            marker: {
                symbol: 'url(assets/images/legend-symbol-yellow.svg)'
            },
            data: []
        },
        {
            name: 'NO OPPORTUNITY - 4',
            color: 'crimsonred',
            marker: {
                symbol: 'url(assets/images/legend-symbol-red.svg)'
            },
            data: []
        },
        {
            name: 'JAPAN',
            color: 'orangered',
            showInLegend: false,
            data: [
                {
                    x: 0.2,
                    y: 3,
                    name: 'BRAND 1',
                }
            ]
        },
        {
            name: 'UK',
            color: 'red',
            showInLegend: false,
            marker: {
                symbol: 'circle'
            },
            data: [
                {x:0.65, y:2.52, name: 'BRAND 2'},
                {x:2, y:1, name: 'BRAND 7'},
                {x:2.95, y:1.7, name: 'BRAND 9'}
            ]
        },
        {
            name: 'KSA',
            color: '#965cde',
            showInLegend: false,
            marker: {
                symbol: 'circle'
            },
            data: [
                {x:0.75, y:1.6, name: 'BRAND 4'},
                {x:1.5, y:2, name: 'BRAND 5'}
            ]
        },
        {
            name: 'BRAZIL',
            color: '#f2d95d',
            showInLegend: false,
            marker: {
                symbol: 'circle'
            },
            data: [
                {x: 1.22, y: 1, name: 'BRAND 6'}
            ]
        },
        {
            name: 'AUSTRALIA',
            color: '#42af19',
            showInLegend: false,
            marker: {
                symbol: 'circle'
            },
            data: [
                {x:1.78, y:2.95, name: 'BRAND 3'},
                {x:1.87, y:2.1, name: 'BRAND 8'},
                {x:2.55, y:0.9, name: 'BRAND 10'}
            ]
        }
    ]
});

