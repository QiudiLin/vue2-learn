$(document).ready(function ($) {
    indexMgr.intSkillBar();
    indexMgr.initScroll();
    indexMgr.initTopHover();
});

var indexMgr = {

    intSkillBar: function () {
        var myChart = echarts.init(document.getElementById('skill-bar'));

        // 指定图表的配置项和数据
        var option = {
            color: ['#3398DB'],
            title: {
                text: '技能分析',
                left: 'center',
                textStyle: {
                    color: '#586371',
                    fontSize: 16,
                    fontWeight: 'bold',
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    splitLine: { // x轴分割线
                        interval: 0,
                        show: true,
                        color: '#f2f2f2',
                        width: 1,
                    },
                    data: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'Bootstrap', 'webpack', 'ASP.NET', 'Node'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            textStyle: {
                color: '#586371'
            },
            yAxis: [
                {
                    type: 'value',
                    nameTextStyle: {
                        color: '#586371'
                    },
                    max: 100,
                    min: 0,
                    axisLine: {
                        interval: 1,
                        show: true,
                    },
                    axisLabel: {
                        show: true,
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [95, 93, 95, 90, 80, 75, 85, 80],
                    itemStyle: {
                        normal: {
                            color: '#4A90E2',
                        },
                    },
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    },

    initScroll: function () {
        $(".scroll").click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
        });
    },

    initTopHover: function () {
        var aboutOffestTop = $('#about').offset().top;
        $(window).scroll(function () {
            var windowScroll = $(window).scrollTop();
            if (windowScroll >= aboutOffestTop) {
                $('#toTop').show();
            } else {
                $('#toTop').hide();
            }
        });
    }
}
