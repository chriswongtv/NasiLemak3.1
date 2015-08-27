// Morris.js Charts sample data for SB Admin template

$(function() {

    // Area Chart
    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }],
        xkey: 'period',
        ykeys: ['iphone', 'ipad', 'itouch'],
        labels: ['iPhone', 'iPad', 'iPod Touch'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    // Donut Chart
    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "13-20 years old",
            value: 15
        }, {
            label: "21-40 years old",
            value: 35
        }, {
            label: "41-60 years old",
            value: 35
		}, {
			label: "61-80 years old",
			value: 15
        }],
        resize: true
    });

    // Line Chart
    Morris.Line({
        // ID of the element in which to draw the chart.
        element: 'morris-line-chart',
        // Chart data records -- each entry in this array corresponds to a point on
        // the chart.
        data: [{
            d: '1) 12:00am -2:59am',
            visits: 7
        }, {
            d: '2) 3:00am- 5:59am',
            visits: 12
        }, {
            d: '3) 6:00am-8:59am',
            visits: 14
        }, {
            d: '4) 9:00am-11:59pm',
            visits: 16
        }, {
            d: '5) 12:00pm-2:59pm',
            visits: 18
        }, {
            d: '6) 3:00pm-5:59pm',
            visits: 20
        }, {
            d: '7) 6:00pm-8:59pm',
            visits: 18
        }, {
            d: '8) 9:00pm-11:59pm',
            visits: 17
        }, ],
        // The name of the data record attribute that contains x-visitss.
        xkey: 'd',
        // A list of names of data record attributes that contain y-visitss.
        ykeys: ['visits'],
        // Labels for the ykeys -- will be displayed when you hover over the
        // chart.
        labels: ['Visits'],
        // Disables line smoothing
        smooth: false,
        resize: true
    });

    // Bar Chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            device: 'Chocolate',
            geekbench: 7
        }, {
            device: 'Ice Cream',
            geekbench: 8
        }, {
            device: 'Hair Spray',
            geekbench: 2
        }, {
            device: 'Keychain',
            geekbench: 15
        }, {
            device: 'RC Helicopter',
            geekbench: 1
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['Redemptions'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });
	
	// Bar Chart
 	Morris.Bar({
        element: 'morris-bar-chart-2',
        data: [{
            device: 'FreshFood-FruitsandVeggies',
            geekbench: 421
        }, {
            device: 'Electronics-Smartphones',
            geekbench: 213
        }, {
            device: 'Sports-Football',
            geekbench: 112
        }, {
            device: 'Lifestyle-BeautyProducts',
            geekbench: 102
        }, {
            device: 'FreshFood-MeatandPoultry',
            geekbench: 87
        }],
        xkey: 'device',
        ykeys: ['geekbench'],
        labels: ['signals received'],
        barRatio: 0.4,
        xLabelAngle: 35,
        hideHover: 'auto',
        resize: true
    });


});
