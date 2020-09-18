import 'echarts-liquidfill'
export const option1 = {
    backgroundColor: '',
    title: {
        text: '',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 25,
            color: 'rgb(97, 142, 205)'
        }
    },
    series: [{
            type: 'liquidFill',
            radius: '65%',
            center: ['50%', '50%'],
            data: [0.8, 0.8, 0.8], // data个数代表波浪数
            backgroundStyle: {
                borderWidth: 1,
                color: 'rgb(255,0,255,0.1)'
            },
            label: {
                normal: {
                    formatter: function(params){
                        console.log(params,111)
                        return `${params.value*100}`+'%' 
                    },
                    textStyle: {
                        fontSize: 14,
                        color:'white'
                    }
                }
            },
            outline: {
                show: false,
            }
        },
        {
            "type": "pie",
            "center": ["50%", "50%"],
            "radius": ["70%", "72%"],
            "hoverAnimation": false,
            "data": [{
                    "name": "",
                    "value": 700,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画中间的图标
                    "name": "",
                    "value": 4,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#ffffff',
                        "normal": {
                            "color": "#5886f0",
                            "borderColor": "#5886f0",
                            "borderWidth": 20,
                            // borderRadius: '100%'
                        },
                    },
                    label: {

                        borderRadius: '100%'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }

                },
                { // 解决圆点过大后续部分显示明显的问题
                    "name": "",
                    "value": 4,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: '#5886f0'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#5886f0'
                        },
                    }
                },
                { //画剩余的刻度圆环
                    "name": "",
                    "value": 50,
                    itemStyle: {
                        color: '#5886f0'
                    },
                    "label": {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'rgba(255,255,255,1)'
                        },
                    }
                }
            ]
        }

    ]
}
export const option2 = {
    backgroundColor: '',
    grid:{
        right:'20%',
        containLabel: true
    },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5','#FBFE27'], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [{
                value: 585,
                name: '优秀'
            },
            {
                value: 410,
                name: '良好'
            },
            {
                value: 274,
                name: '适中'
            },
            {
                value: 235,
                name: '较差'
            },{
                value:50,
                name:'极差'
            }
        ].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                formatter: ['{c|{c}次}', '{b|{b}}'].join('\n'),
                rich: {
                    c: {
                        color: 'rgb(241,246,104)',
                        fontSize: 12,
                       
                        lineHeight: 0
                    },
                    b: {
                        color: 'rgb(1,234,254)',
                        fontSize: 12,
                        height: 25
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: 'rgb(98,137,169)',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 50,
            }
        }
    }]
};
var colorArray = [
    {
        top: '#ffa800', //黄
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#1ace4a', //绿
        bottom: 'rgba(11,42,84, 0.3)'
    },
    {
        top: '#4bf3ff', //蓝
        bottom: 'rgba(11,42,84,.3)'
    }, {
        top: '#4f9aff', //深蓝
        bottom: 'rgba(11,42,84,.3)'
    },
    {
        top: '#b250ff', //粉
        bottom: 'rgba(11,42,84,.3)'
    }
];
export const option3 = {
   
     tooltip: {
          show: true,
          formatter: "{b}:{c}"
        },
   grid: {
          left: '5%',
          top: '12%',
          right: '10%',
          bottom: '8%',
          containLabel: true
        },
  
    xAxis: {
        type: 'value',
        show:false,
        position: 'top',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: false
        },
    },
    yAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

            },
            "splitLine": { //网格线
                "show": false
            },
            inverse: 'true', //排序
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['1月', '2月', '3月', '4月', '5月']
        }

    ],
    series: [{
            name: '能耗值',
            type: 'bar',
                label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}万元',
                  textStyle: {
                    color: 'white' //color of value
                  }
                }
              },
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        let num = colorArray.length;
                        return {
                            type: 'linear',
                            colorStops: [{
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }, {
                                offset: 0,
                                color: colorArray[params.dataIndex % num].bottom
                            }, {
                                offset: 1,
                                color: colorArray[params.dataIndex % num].top
                            }],
                            //globalCoord: false
                        }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barGap: '0%',
            barCategoryGap: '50%',
            data: [60, 132, 89, 134, 60]
        }

    ]
};