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
        tickColor: '#777'
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
                format: '{point.country} <br /> BRAND {point.brand}',
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
            color: '#55ce55',
            marker: {
                symbol: 'url(assets/images/legend-symbol-green.svg)'
            },
            data: [
                {x:1.78, y:2.95, country: 'AUSTRALIA', brand: '3', marker: { symbol: 'circle' }},
                {x:1.87, y:2.1, country: 'AUSTRALIA', brand: '8', marker: { symbol: 'circle' }},
                {x:2.55, y:0.9, country: 'AUSTRALIA', brand: '10', marker: { symbol: 'circle' }}
            ]
        },
        {
            name: 'POTENTIAL OPPORTUNITY - 8',
            color: '#f2d95d',
            marker: {
                symbol: 'url(assets/images/legend-symbol-yellow.svg)'
            },
            data: [
                {x: 1.22, y: 1, country: 'BRAZIL', brand: '6', marker: { symbol: 'circle' }}
            ]
        },
        {
            name: 'NO OPPORTUNITY - 4',
            color: 'red',
            marker: {
                symbol: 'url(assets/images/legend-symbol-red.svg)',
            },
            data: [
                {x:0.65, y:2.52,country: 'UK', brand: '2', marker: { symbol: 'circle' }},
                {x:2, y:1, country: 'UK',brand: '7', marker: { symbol: 'circle' }},
                {x:2.95, y:1.7,country: 'UK', brand: '9', marker: { symbol: 'circle' }}
            ]
        },
        {
            name: 'JAPAN',
            color: 'orangered',
            showInLegend: false,
            data: [
                {
                    x: 0.2,
                    y: 3,
                    brand: '1',
                }
            ],
            dataLabels: {
                format: '{series.name} <br /> BRAND {point.brand}'
            }
        },
        {
            name: 'KSA',
            color: '#965cde',
            showInLegend: false,
            marker: {
                symbol: 'circle'
            },
            data: [
                {x:0.75, y:1.6, brand: '4'},
                {x:1.5, y:2, brand: '5'}
            ],
            dataLabels: {
                format: '{series.name} <br /> BRAND {point.brand}'
            }
        }
    ]
});

