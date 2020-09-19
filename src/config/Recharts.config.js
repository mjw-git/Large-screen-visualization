import 'echarts-liquidfill'
export const option1 = {
    backgroundColor: '',
    grid: {
        left: '1%',
        right: '10%',
        top: '10%',
        bottom: '5%',
        containLabel: true
    },
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
            radius: '75%',
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
            "radius": ["85%", "80%"],
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
export const option4 = {
    backgroundColor: '',
    "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 14
    },
    "toolbox": {
        "show": false,
        "feature": {
            "saveAsImage": {
                "backgroundColor": "#031245"
            },
            "restore": {}
        },
        "iconStyle": {
            "borderColor": "#c0c3cd"
        }
    },
    "legend": {
        "top": 10,
        "itemWidth": 8,
        "itemHeight": 8,
        "icon": "circle",
        "left": "center",
        "padding": 0,
        "textStyle": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "padding": [2, 0, 0, 0]
        }
    },
    "color": ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 12
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 8,
            "interval": 0
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "data": ["0~4", "4~9", "9~12", "12~18", "18~21", "21~24"],
        "type": "category"
    },
    "yAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 12
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 12
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#384267",
                "type": "dashed"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "name": ""
    },
    "series": [{
        "data": [200, 85, 112, 275, 305, 415],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                    "offset": 0,
                    "color": "#0b9eff"
                }, {
                    "offset": 1,
                    "color": "#63caff"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
        }
    }, {
        "data": [1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15]
    }, {
        "data": [200, 85, 112, 275, 305, 415],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": 2
    }, {
        "data": [741, 741, 741, 741, 741, 741],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "barGap": "-100%",
        "zlevel": -1
    }, {
        "data": [1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15],
        "zlevel": -2
    }, {
        "data": [741, 741, 741, 741, 741, 741],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": -1
    }],
    "tooltip": {
        "trigger": "axis",
        "show": false
    }
}






// var xData = function() {
//     var data = [];
//     for (var i =1; i < 9; i++) {
//         data.push(i + "");
//     }
//     return data;
// }();

var dataTime = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'];

export const option5 = {
    backgroundColor: "",
    "title": {
        "text": "",
        // "subtext": "BY MICVS",
        x: "center",
        y: '4%',

        textStyle: {
            color: '#fff',
            fontSize: '10'
        },
        subtextStyle: {
            color: '#90979c',
            fontSize: '10',

        },
    },
    "tooltip": {
        "trigger": "axis",
        "axisPointer": {
            "type": "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    "grid": {
        "borderWidth": 0,
        "top": 11,
        "left":40,
        "bottom": 20,
        textStyle: {
            color: "#fff"
        }
    },
    "calculable": true,
    "xAxis": [{
        "type": "category",
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitArea": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "data": dataTime,
    }],
    "yAxis": [{
        "type": "value",
        "splitLine": {
            "show": false
        },
        "axisLine": {
            lineStyle: {
                color: '#90979c'
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,

        },
        "splitArea": {
            "show": false
        },

    }],
    // "dataZoom": [{
    //     "show": true,
    //     "height": 30,
    //     "xAxisIndex": [
    //         0
    //     ],
    //     bottom: 10,
    //     "start": 0,
    //     "end": 90,
    //     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
    //     handleSize: '110%',
    //     handleStyle:{
    //         color:"#d3dee5",
            
    //     },
    //        textStyle:{
    //         color:"#fff"},
    //        borderColor:"#90979c"
        
        
    // }, {
    //     "type": "inside",
    //     "show": true,
    //     "height": 9,
    //     "start": 1,
    //     "end": 35
    // }],
    "series": [

      {
            "name": "实际数据",
            "type": "line",
            "stack": "总量",
            symbolSize:10,
            symbol:'circle',
            "itemStyle": {
                "normal": {
                    "color": "rgba(252,230,48,1)",
                    "barBorderRadius": 0,
                    "label": {
                        "show": true,
                        "position": "top",
                        formatter: function(p) {
                            return p.value > 0 ? (p.value) : '';
                        }
                    }
                }
            },
            "data": [
                38,
                183,
                182,
                207,
                39,
                42,
                46,
                73,
                406,
                345,
                63,
                32
            ]
        },
    ]
}