var chart_b7106ea5cadf467d98ae8e617d6e20e9 = echarts.init(
    document.getElementById('b7106ea5cadf467d98ae8e617d6e20e9'), 'white', {renderer: 'canvas'});
var option_b7106ea5cadf467d98ae8e617d6e20e9 = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"maroon",
"firebrick",
"red"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "1\ucc28",
            "value": 13
        },
        {
            "name": "2\ucc28",
            "value": 7
        },
        {
            "name": "3\ucc28",
            "value": 4
        }
    ],
    "radius": [
        "0%",
        "75%"
    ],
    "center": [
        "50%",
        "50%"
    ],
    "label": {
        "show": true,
        "position": "top",
        "color": [
            "black"
        ],
        "margin": 8,
        "formatter": "{b}: {d}%"
    },
    "rippleEffect": {
        "show": true,
        "brushType": "stroke",
        "scale": 2.5,
        "period": 4
    }
}
],
"legend": [
{
    "data": [
        "1\ucc28",
        "2\ucc28",
        "3\ucc28"
    ],
    "selected": {},
    "show": true,
    "left": "75%",
    "top": "70%",
    "orient": "vertical",
    "padding": 5,
    "itemGap": 10,
    "itemWidth": 25,
    "itemHeight": 14
}
],
"tooltip": {
"show": true,
"trigger": "item",
"triggerOn": "mousemove|click",
"axisPointer": {
    "type": "line"
},
"textStyle": {
    "fontSize": 14
},
"borderWidth": 0
},
"title": [
{
    "text": "\uac10\uc5fc \ucc28\uc218",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_b7106ea5cadf467d98ae8e617d6e20e9.setOption(option_b7106ea5cadf467d98ae8e617d6e20e9);