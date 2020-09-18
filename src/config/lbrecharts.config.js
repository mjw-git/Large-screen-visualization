import echarts from 'echarts'
var fontColor = '#30eee9';
export const option1 = {
    backgroundColor: '',
    grid: {
        left: '1%',
        right: '10%',
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    		// legend: {
    		// 	show:false,
    		// 	x:'center',
    		// 	y:'35',
    		// 	icon: 'stack',
    		// 	itemWidth:10,
    		// 	itemHeight:10,
    		// 	textStyle:{
    		// 		color:'#1bb4f6'
    		// 	},
    		// 	data:['已采纳','已发布']
    		// },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: fontColor
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#397cbc'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#195384'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月']
    }],
    yAxis: [{
            axisLabel: {
                textStyle: {
                    fontSize:8,
                    color: '#2ad1d2'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#27b4c2'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    
                    color: '#11366e'
                }
            }
        },

    ],
    series: [{
            name: '数量',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 8,
            label: {
                show: true,
                position: 'top',
                distance: 0,
                color: '#08DFFE',
                fontWeight: 'bolder',
                fontSize: 8,
            },
            itemStyle: {
                normal: {
                    color: '#0092f6',
                    lineStyle: {
                        color: "#0092f6",
                        width: 1
                    },
                    //           areaStyle: { 
                    // 			//color: '#94C9EC'
                    // 			color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                    // 				offset: 0,
                    // 				color: 'rgba(7,44,90,0.3)'
                    // 			}, {
                    // 				offset: 1,
                    // 				color: 'rgba(0,146,246,0.9)'
                    // 			}]),
                    //           }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [601, 132, 101, 134, 90, 230]
        }
      

    ]
};


export const option2 = {
    backgroundColor: '',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        top: '10%',
        left: '1.5%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        top: '15%',
        right: '3%',
        left: '10%',
        bottom: '25%'
    },
    xAxis: [{
        type: 'category',
        data: ['四川', '西藏', '甘肃', '安徽', '辽宁', '河南', '河北'],
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.12)'
            }
        },
        axisLabel: {
            margin: 10,
            color: '#e2e9ff',
            textStyle: {
                fontSize: 14
            },
        },
    }],
    yAxis: [{
        splitNumber: 3,
        axisLabel: {
            formatter: '{value}',
            color: '#e2e9ff',
        },
        axisLine: {
            show: false
        },
		splitLine: {
			 show: false,
			 lineStyle: {
				 color: '#233e64'
			 }
		},
    }],
    series: [{
        type: 'bar',
        data: [300, 450, 770, 203, 255, 188, 156],
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,244,255,1)' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: 'rgba(0,77,167,1)' // 100% 处的颜色
                }], false),
                barBorderRadius: [30, 30, 30, 30],
                shadowColor: 'rgba(0,160,221,1)',
                shadowBlur: 4,
            }
        },
        // label: {
        //     normal: {
        //         show: true,
        //         lineHeight: 30,
        //         width: 80,
        //         height: 30,
        //         backgroundColor: 'rgba(0,160,221,0.1)',
        //         borderRadius: 200,
        //         position: ['-8', '-60'],
        //         distance: 1,
        //         formatter: [
        //             '    {d|●}',
        //             ' {a|{c}}     \n',
        //             '    {b|}'
        //         ].join(','),
        //         rich: {
        //             d: {
        //                 color: '#3CDDCF',
        //             },
        //             a: {
        //                 color: '#fff',
        //                 align: 'center',
        //             },
        //             b: {
        //                 width: 1,
        //                 height: 30,
        //                 borderWidth: 1,
        //                 borderColor: '#234e6c',
        //                 align: 'left'
        //             },
        //         }
        //     }
        // }
    }]
};