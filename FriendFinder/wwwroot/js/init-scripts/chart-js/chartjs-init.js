(function($) {
    "use strict";

    //Team chart
    var ctx = document.getElementById("team-chart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["۱۳۹۲", "۱۳۹۳", "۱۳۹۴", "۱۳۹۵", "۱۳۹۶", "۱۳۹۷", "۱۳۹۸"],
            type: "line",
            defaultFontFamily: "iransans",
            datasets: [
                {
                    data: [0, 7, 3, 5, 2, 10, 7],
                    label: "هزینه",
                    fontFamily: "iransans",
                    backgroundColor: "rgba(0,103,255,.15)",
                    borderColor: "rgba(0,103,255,0.5)",
                    borderWidth: 3.5,
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "rgba(0,103,255,0.5)"
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: "index",
                titleFontSize: 20,
                titleFontColor: "#000",
                bodyFontColor: "#000",
                backgroundColor: "#fff",
                titleFontFamily: "iransans",
                bodyFontFamily: "iransans",
                cornerRadius: 3,
                intersect: false
            },
            legend: {
                display: false,
                position: "top",
                labels: {
                    usePointStyle: true,
                    fontFamily: "iransans"
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: "ماه",
                            fontFamily: "iransans"
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "مقدار",
                            fontFamily: "iransans"
                        }
                    }
                ]
            },
            title: {
                display: false
            }
        }
    });

    //Sales chart
    var ctx = document.getElementById("sales-chart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["۱۳۹۲", "۱۳۹۳", "۱۳۹۴", "۱۳۹۵", "۱۳۹۶", "۱۳۹۷", "۱۳۹۸"],
            type: "line",
            defaultFontFamily: "iransans",
            datasets: [
                {
                    label: "داده های اولیه",
                    fontFamily: "iransans",
                    data: [0, 30, 10, 120, 50, 63, 10],
                    backgroundColor: "transparent",
                    borderColor: "rgba(220,53,69,0.75)",
                    borderWidth: 3,
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "rgba(220,53,69,0.75)"
                },
                {
                    label: "داده های ثانویه",
                    fontFamily: "iransans",
                    data: [0, 50, 40, 80, 40, 79, 120],
                    backgroundColor: "transparent",
                    borderColor: "rgba(40,167,69,0.75)",
                    borderWidth: 3,
                    pointStyle: "circle",
                    pointRadius: 5,
                    pointBorderColor: "transparent",
                    pointBackgroundColor: "rgba(40,167,69,0.75)"
                }
            ]
        },
        options: {
            responsive: true,

            tooltips: {
                mode: "index",
                titleFontSize: 20,
                titleFontColor: "#000",
                bodyFontColor: "#000",
                backgroundColor: "#fff",
                titleFontFamily: "iransans",
                bodyFontFamily: "iransans",
                cornerRadius: 3,
                intersect: false
            },
            legend: {
                display: false,
                labels: {
                    usePointStyle: true,
                    fontFamily: "iransans"
                }
            },
            scales: {
                xAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: false,
                            labelString: "ماه",
                            fontFamily: "iransans"
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                        scaleLabel: {
                            display: true,
                            labelString: "مقدار",
                            fontFamily: "iransans"
                        }
                    }
                ]
            },
            title: {
                display: false,
                text: "Normal Legend",
                fontFamily: "iransans"
            }
        }
    });

    //line chart
    var ctx = document.getElementById("lineChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: [
                "فروردین",
                "اردیبهشت",
                "خرداد",
                "تیر",
                "مرداد",
                "شهریور",
                "مهر"
            ],
            fontFamily: "iransans",
            datasets: [
                {
                    label: "مجموع فروش محصول دوم",
                    fontFamily: "iransans",
                    borderColor: "rgba(0,0,0,.09)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0,0,0,.07)",
                    data: [22, 44, 67, 43, 76, 45, 12]
                },
                {
                    label: "مجموع فروش محصول اول",
                    fontFamily: "iransans",
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)",
                    pointHighlightStroke: "rgba(26,179,148,1)",
                    data: [16, 32, 18, 26, 42, 33, 44]
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                mode: "index",
                intersect: false,
                fontFamily: "iransans"
            },
            hover: {
                mode: "nearest",
                intersect: true,
                fontFamily: "iransans"
            }
        }
    });

    //bar chart
    var ctx = document.getElementById("barChart");
    //    ctx.height = 200;
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "فروردین",
                "اردیبهشت",
                "خرداد",
                "تیر",
                "مرداد",
                "شهریور",
                "مهر"
            ],
            fontFamily: "iransans",
            datasets: [
                {
                    label: "مجموع فروش محصول دوم",
                    fontFamily: "iransans",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                },
                {
                    label: "مجموع فروش محصول اول",
                    fontFamily: "iransans",
                    data: [28, 48, 40, 19, 86, 27, 90],
                    borderColor: "rgba(0,0,0,0.09)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0,0,0,0.07)"
                }
            ]
        },
        options: {
            tooltips: {
                titleFontSize: 20
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });

    //radar chart
    var ctx = document.getElementById("radarChart");
    ctx.height = 160;
    var myChart = new Chart(ctx, {
        type: "radar",
        data: {
            labels: [
                ["خوردن", "شام"],
                ["نوشیدن", "آب"],
                "خوابیدن",
                ["طراحی", "گرافیک"],
                "برنامه نویسی",
                "دوچرخه سواری",
                "دویدن"
            ],
            fontFamily: "iransans",
            datasets: [
                {
                    label: "داده های ثانویه",
                    fontFamily: "iransans",
                    data: [65, 59, 66, 45, 56, 55, 40],
                    borderColor: "rgba(0, 123, 255, 0.6)",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.4)"
                },
                {
                    label: "داده های اولیه",
                    fontFamily: "iransans",
                    data: [28, 12, 40, 19, 63, 27, 87],
                    borderColor: "rgba(0, 123, 255, 0.7",
                    borderWidth: "1",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                }
            ]
        },
        options: {
            tooltips: {
                titleFontSize: 20,
                fontFamily: "iransans"
            },
            legend: {
                position: "top",
                fontFamily: "iransans"
            },
            scale: {
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

    //pie chart
    var ctx = document.getElementById("pieChart");
    ctx.height = 300;
    var myChart = new Chart(ctx, {
        type: "pie",
        data: {
            datasets: [
                {
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        "rgba(0, 123, 255,0.9)",
                        "rgba(0, 123, 255,0.7)",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)"
                    ],
                    hoverBackgroundColor: [
                        "rgba(0, 123, 255,0.9)",
                        "rgba(0, 123, 255,0.7)",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)"
                    ]
                }
            ],
            labels: ["داده سوم", "داده دوم", "داده اول"],
            fontFamily: "iransans"
        },
        options: {
            tooltips: {
                titleFontSize: 20,
                fontFamily: "iransans"
            },
            responsive: true
        }
    });

    //doughut chart
    var ctx = document.getElementById("doughutChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
            datasets: [
                {
                    data: [45, 25, 20, 10],
                    backgroundColor: [
                        "rgba(0, 123, 255,0.9)",
                        "rgba(0, 123, 255,0.7)",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)"
                    ],
                    hoverBackgroundColor: [
                        "rgba(0, 123, 255,0.9)",
                        "rgba(0, 123, 255,0.7)",
                        "rgba(0, 123, 255,0.5)",
                        "rgba(0,0,0,0.07)"
                    ]
                }
            ],
            labels: ["داده چهارم", "داده سوم", "داده دوم", "داده اول"],
            fontFamily: "iransans"
        },
        options: {
            tooltips: {
                titleFontSize: 20,
                fontFamily: "iransans"
            },
            responsive: true
        }
    });

    //polar chart
    var ctx = document.getElementById("polarChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "polarArea",
        data: {
            datasets: [
                {
                    data: [15, 18, 9, 6, 19],
                    backgroundColor: [
                        "rgba(0, 123, 255,0.9)",
                        "rgba(0, 123, 255,0.8)",
                        "rgba(0, 123, 255,0.7)",
                        "rgba(0,0,0,0.2)",
                        "rgba(0, 123, 255,0.5)"
                    ]
                }
            ],
            labels: ["داده چهارم", "داده سوم", "داده دوم", "داده اول"],
            fontFamily: "iransans"
        },
        options: {
            tooltips: {
                titleFontSize: 20,
                fontFamily: "iransans"
            },
            responsive: true
        }
    });

    // single bar chart
    var ctx = document.getElementById("singelBarChart");
    ctx.height = 150;
    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "شنبه",
                "یک شنبه",
                "دو شنبه",
                "سه شنبه",
                "چهارشنبه",
                "پنج شنبه",
                "جمعه"
            ],
            fontFamily: "iransans",
            datasets: [
                {
                    label: "مجموع فروش",
                    fontFamily: "iransans",
                    data: [40, 55, 75, 81, 56, 55, 40],
                    borderColor: "rgba(0, 123, 255, 0.9)",
                    borderWidth: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.5)"
                }
            ]
        },
        options: {
            responsive: true,
            tooltips: {
                titleFontSize: 20,
                fontFamily: "iransans"
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
})(jQuery);
