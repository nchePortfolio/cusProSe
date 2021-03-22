// families = [
//     {
//         "name": "A1",
//         "rules": [
//             {
//                 "mandatories": ["A", "B", "C"]
//             },
//             {
//                 "forbidden": ["D", "E"]
//             }
//         ],
//         "proteins": [
//             {
//                 "id": "XP_001",
//                 "length": "1000",
//                 "domains": [
//                     {
//                         "name": "KH",
//                         "start": "10",
//                         "length": "250",
//                         "color": "green"
//                     },
//                     {
//                         "name": "C",
//                         "start": "300",
//                         "length": "55",
//                         "color": "yellow"
//                     }
//                 ]
//             },
//             {
//                 "id": "XP_002",
//                 "length": "2360",
//                 "domains": [
//                     {
//                         "name": "NRPS",
//                         "start": "150",
//                         "length": "300",
//                         "color": "blue"
//                     },
//                     {
//                         "name": "PP",
//                         "start": "850",
//                         "length": "100",
//                         "color": "pink"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "name": "A2",
//         "rules": [
//             {
//                 "mandatories": ["Q", "F", "G"]
//             },
//             {
//                 "forbidden": ["M", "P"]
//             }
//         ],
//         "proteins": [
//             {
//                 "id": "XP_008",
//                 "length": "1565",
//                 "domains": [
//                     {
//                         "name": "RAS",
//                         "start": "455",
//                         "length": "300",
//                         "color": "pink"
//                     },
//                     {
//                         "name": "DMATS",
//                         "start": "923",
//                         "length": "111",
//                         "color": "violet"
//                     }
//                 ]
//             },
//             {
//                 "id": "XP_009",
//                 "length": "985",
//                 "domains": [
//                     {
//                         "name": "NRPS",
//                         "start": "95",
//                         "length": "300",
//                         "color": "blue"
//                     },
//                     {
//                         "name": "PP",
//                         "start": "633",
//                         "length": "100",
//                         "color": "pink"
//                     }
//                 ]
//             }
//         ]
//     }
// ]

d3.json("./data.json").then(function(families) {


    var tooltip = d3.select("body")
        .append("div")
        .style("position", "absolute")
        .style("visibility", "hidden")
        .style("background", "white")
        .style("color", "black")
        .style("border", "0.5px solid")
        .style("z-index", "1")
        .style("width", "100px")
        .style("height", "25px")
        .style("text-align", "center")
        .style("vertical-align", "middle")
        .style("font-weight", "bold")
        .style("overflow", "hidden")
        .style("text-overflow", "ellipsis")


    d3.select("section")
        .append("div")
        .attr("id", "family-summary")

    var buttons = d3.select("#nav-content").selectAll("div")
        .data(families)
        .enter().append("div")
            .attr("class", "nav-famlist")
            .style("display", "block")
            .style("text-align", "left")
            .text(function (d) {
                return d.name;
            })

    buttons.on("mouseover", function () {
        d3.select(this)
            .style("cursor", "pointer")
            .style("font-size", "14px")
            .style("font-style", "italic")
    }) 

    buttons.on("mouseout", function () {
        d3.select(this).style("color", "black")
            .style("font-size", "12px")
            .style("font-style", "normal")
    })

        

    d3.select("#mandatory").selectAll("text")
        .data(families[0].rules[0].mandatories)
        .enter().append("text")
            .text(function(d) {return `${d} `})

    d3.select("#forbidden").selectAll("text")
        .data(families[0].rules[1].forbidden)
        .enter().append("text")
            .text(function(d) {return `${d} `})


    var width = 1000;
    var height = 50;

    var proteins = families[0].proteins
    var protein_length = proteins.map(function(d) {return +d.length;})

    var scale = d3.scaleLinear()
        .domain([1, d3.max(protein_length)])
        .range([1, 1000]);

    var div = d3.select(".my_dataviz").selectAll("div")
                .data(proteins)
                .enter().append("div")
                    .attr("class", "mydiv")
                    // .style("background-color", function(d, i) {
                    //     if (i % 2 == 0) {
                    //         return "lightgray";
                    //     } else {
                    //         return "gray";
                    //     }
                    // })

    var svg = div.append("svg")
                    .attr("width", width)
                    .attr("height", height)

    var g = svg.append("g")
                .attr("transform", function(d, i) {
                    return "translate(0,0)";
                })

    var line = g.append("line")
                    .attr("x1", 1)
                    .attr("y1", 25)
                    .attr("x2", d => scale(+d.length))
                    .attr("y2", 25)
                    .attr("stroke", "black")

    var rect = g.selectAll("rect")
                .data(d => d.domains)
                .enter().append("rect")
                    .attr("x", d => scale(d.start))
                    .attr("y", 15)
                    .attr("height", "20")
                    .attr("width", d => scale(d.length))
                    .attr("fill", d => d.color)
                    .attr("stroke", "black")
                    .attr("fill-opacity", "0.75")
                    .on("mouseover", function(event, d) {
                        tooltip.html(d.name)
                            .style("left", `${event.pageX - 30}px`)     
                            .style("top", `${event.pageY + 30}px`)

                        tooltip.style("visibility", "visible")
                            .style("opacity", 0.95)
                            
                    })
                    .on("mouseout", function(d) {
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", 0);
                    });
    
    buttons.on("click", function() {
        // Update rule summary header
        var mand = this.__data__.rules.map(d => d.mandatories)
        var forb = this.__data__.rules.map(d => d.forbidden)

        d3.select("#mandatory").selectAll("text").remove()
        d3.select("#mandatory").selectAll("text")
            .data(mand[0])
            .enter().append("text")
                .text(function(d) {return `${d} `})

        d3.select("#forbidden").selectAll("text").remove()
        d3.select("#forbidden").selectAll("text")
            .data(forb[1])
            .enter().append("text")
                .text(function(d) {return `${d} `})


        // Update protein plots
        var proteins = this.__data__.proteins
        // console.log(proteins)
        var protein_length = proteins.map(function(d) {return +d.length;})

        var scale = d3.scaleLinear()
            .domain([1, d3.max(protein_length)])
            .range([1, 1000]);
            
        //rejoin data
        d3.select(".my_dataviz").selectAll("div").remove()
        var div = d3.select(".my_dataviz").selectAll("div")
        .data(proteins)
        .enter().append("div")
            .attr("class", "mydiv")

        var svg = div.append("svg")
                .attr("width", width)
                .attr("height", height)

        var g = svg.append("g")
            .attr("transform", function(d, i) {
                return "translate(0,0)";
            })

        var line = g.append("line")
                .attr("x1", 1)
                .attr("y1", 25)
                .attr("x2", d => scale(+d.length))
                .attr("y2", 25)
                .attr("stroke", "black")

        var rect = g.selectAll("rect")
            .data(d => d.domains)
            .enter().append("rect")
                .attr("x", d => scale(d.start))
                .attr("y", 15)
                .attr("height", "20")
                .attr("width", d => scale(d.length))
                .attr("fill", d => d.color)
                .attr("stroke", "black")
                .attr("fill-opacity", "0.75")
                    .on("mouseover", function(event, d) {
                        tooltip.html(d.name)
                            .style("left", `${event.pageX - 30}px`)     
                            .style("top", `${event.pageY + 30}px`)

                        tooltip.style("visibility", "visible")
                            .style("opacity", 0.95)
                            
                    })
                    .on("mouseout", function(d) {
                        tooltip.transition()
                            .duration(200)
                            .style("opacity", 0);
                    });

        
    })
                
});
