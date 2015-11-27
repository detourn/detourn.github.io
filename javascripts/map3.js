//basic map config with custom fills, mercator projection
               
               var series = [
        ["USA",36.2],["GBR",7.4],["CAN",6.2],["DEU",5.7],["FRA", 4.1],["ESP",4.1],["ITA",3.3],["MEX",3.0],["AUS",2.5],["NLD",2.4],
        ["IND",2.1],["BRA",2.0],["GRC",1.4],["AUT",1.2],["ROU",1.2],["SRB",1.0],["COL",0.8],["POL",0.8],["ZAF",0.7],["SWE",0.7],
        ["DNK",0.6],["VEN",0.6],["JPN",0.6],["KOR",0.6],["BEL",0.5],["RUS",0.5],["PRT",0.5]
                            ];
                       
         var dataset = {};
            // We need to colorize every country based on "percent"
            // colors should be uniq for every value.
            // For this purpose we create palette(using min/max series-value)
            var onlyValues = series.map(function(obj){ return obj[1]; });
            var minValue = Math.min.apply(null, onlyValues),
                    maxValue = Math.max.apply(null, onlyValues);
            // create color palette function
            // color can be whatever you wish
            var paletteScale = d3.scale.linear()
                    .domain([minValue,maxValue])
                    .range(["rgb(0,0,0)","rgb(219,219,219)"]);  // color
            // fill dataset in appropriate format
            series.forEach(function(item){ //
                // item example value ["USA", 36.2]
                var iso = item[0],
                        value = item[1];
                dataset[iso] = { percent: value, fillColor: paletteScale(value) };
            });
              var map = new Datamap({
                done: function(datamap) {
            datamap.svg.call(d3.behavior.zoom().on("zoom", redraw));
            function redraw() {
                datamap.svg.selectAll("g").attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
            }
        },
                scope: 'world',
                element: document.getElementById('world'),
                projection: 'orthographic',
                projectionConfig: {
                  rotation: [-99,-10]
                },
                 fills: {defaultFill: 'rgba(30,30,30,0.1)'},
                data: dataset,
                geographyConfig: {
                    borderColor: 'rgba(222,222,222,0.2)',
                    highlightBorderWidth: 1,
                    // don't change color on mouse hover
                    highlightFillColor: function(geo) {
                        return geo['fillColor'] || 'rgba(30,30,30,0.5)';
                    },
                    // only change border
                    highlightBorderColor: 'rgba(222,222,222,0.5)',
                    // show desired information in tooltip
                    popupTemplate: function(geo, data) {
                        // don't show tooltip if country don't present in dataset
                        if (!data) { return ; }
                        // tooltip content
                        return ['',
                        	'<div style="opacity:0.7;" class="hoverinfo">% of visitors in ' + geo.properties.name,
                                ': ' + data.percent,
                                ''].join('');        
                                
                    }
                }
            });
            
         
            //draw a legend for this map
            map.legend();
            
              map.graticule();
