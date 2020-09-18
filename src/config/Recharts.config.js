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
            data: [0.3, 0.3, 0.3], // data个数代表波浪数
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