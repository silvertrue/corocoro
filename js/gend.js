var chart_084f6f21e37e47549eb7f6784788026a = echarts.init(
    document.getElementById('084f6f21e37e47549eb7f6784788026a'), 'white', {renderer: 'canvas'});
var option_084f6f21e37e47549eb7f6784788026a = {
"animation": true,
"animationThreshold": 2000,
"animationDuration": 1000,
"animationEasing": "cubicOut",
"animationDelay": 0,
"animationDurationUpdate": 300,
"animationEasingUpdate": "cubicOut",
"animationDelayUpdate": 0,
"color": [
"cornflowerblue",
"salmon"
],
"series": [
{
    "type": "pie",
    "clockwise": true,
    "data": [
        {
            "name": "\ub0a8",
            "value": 14
        },
        {
            "name": "\uc5ec",
            "value": 10
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
        "\ub0a8",
        "\uc5ec"
    ],
    "selected": {},
    "show": true,
    "left": "75%",
    "top": "45%",
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
    "text": "\uc131\ubcc4",
    "padding": 5,
    "itemGap": 10
}
]
};
chart_084f6f21e37e47549eb7f6784788026a.setOption(option_084f6f21e37e47549eb7f6784788026a);