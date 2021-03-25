d3.json("./data.json").then(function(families) {

    var famList = d3.select("#nav-content").selectAll("div")
        .data(families)
        .enter().append("div")
            .attr("class", "nav-famlist")
            .style("display", "block")
            .style("text-align", "left")
            .text(function (d) {
                return d.name;
            })

    famList.on("mouseover", function () {
        d3.select(this)
            .style("cursor", "pointer")
            .style("font-size", "12px")
            .style("font-style", "italic")
    }) 

    famList.on("mouseout", function () {
        d3.select(this).style("color", "black")
            .style("font-size", "10px")
            .style("font-style", "normal")
    })

    initPage(families[0]);
    drawProteins(families[0].proteins);
    
    famList.on("click", function() {
        d3.select("#rule-summary .subtitle-header span").select("text").remove()
        d3.select("#rule-summary .subtitle-header span")
        .text(this.__data__.name)
        
        d3.select("#proteins-container .subtitle-header span").select("text").remove()
        d3.select("#proteins-container .subtitle-header span")
        .text(this.__data__.name)

        
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

        rmProteins();
        drawProteins(this.__data__.proteins);
        updateDetails(this.__data__.proteins[0]);
       
    })
                
});


function rmProteins() {
    d3.select("#proteins-draw").selectAll(".protein").remove()
}

function drawProteins(data) {
    var width = 850;
    var height = 80;

    var proteins = data
    var protein_length = proteins.map(function(d) {return +d.length;})

    var scale = d3.scaleLinear()
        .domain([1, d3.max(protein_length)])
        .range([1, 800]);

    var div = d3.select("#proteins-draw").selectAll("div")
                .data(proteins)
                .enter().append("div")
                    .attr("class", "protein")

    var subdiv = div.append("div")
        .attr("class", "protein-descr")
        .text(d => {
            return `${d.id} (${d.length} aa)`;
        })
        .style("font-weight", "bold")
        .style("border-bottom", "1px solid")

    d3.select(".protein-descr ").classed("selected", true);

    var svg = subdiv.append("svg")
                    .attr("width", width)
                    .attr("height", height)

    var g = svg.append("g")
                .attr("transform", function() {
                    return "translate(25,0)";
                })

    g.append("line")
        .attr("x1", 1)
        .attr("y1", 40)
        .attr("x2", d => scale(+d.length))
        .attr("y2", 40)
        .attr("stroke", "black")
        .attr("stroke-width", "2")

    var rect = g.selectAll("rect")
                .data(d => d.domains)
                .enter().append("rect")
                    .attr("x", d => scale(d.start))
                    .attr("y", 32)
                    .attr("height", "16")
                    .attr("width", d => scale(d.length))
                    .attr("fill", d => d.color)
                    .attr("stroke", "black")
                    .attr("fill-opacity", "0.85")
                    .attr("rx", "8")
                    .attr("ry", "8")

    rect.append("title")
        .text(d => `${d.name} (${d.length} aa)`)

    subdiv.on("click", function(d) {
        d3.selectAll(".selected").classed("selected", false);
        var _this = d3.select(this);
        if (_this.classed("selected")) {
            _this.classed("selected", false);
        } else {
            _this.classed("selected", true);    
        }

        updateDetails(this.__data__);

        var protein = this.__data__
        d3.select("#p-id").text(protein.id)
        d3.select("#p-length").text(`${protein.length} aa`)
        d3.select("#p-archNb").text(`${protein.architectures_nb}`)

        d3.select("#detail-hmmdomtbl tbody").selectAll("tr").remove()
        var rows = d3.select("#detail-hmmdomtbl tbody").selectAll("tr")
            .data(protein.domains)
            .enter().append("tr")
                .attr("id", function(d) {return `${d.name}-${d.start}` })

        rows.append("td").text(function(d) {return d.name})
        rows.append("td").text( d => d.start)
        rows.append("td").text( d => (d.start+d.length-1))
        rows.append("td").text( d => d.cevalue)
        rows.append("td").text( d => d.ievalue)
        rows.append("td").text( d => d.score)
    })

    rect.on("mouseenter", function(event, d) {
        d3.select(`#${d.name}-${d.start}`).selectAll("td")
            // .style("border-color", this.__data__.color)
            .style("border-color", "black")
            .style("border-width", "2px")
            .style("font-weight", "bold")
            .classed("rect-hovered", true)
    })
    rect.on("mouseleave", function(event, d) {   
        d3.select(`#${d.name}-${d.start}`).selectAll("td")
        .style("border-width", "1px")
        .style("font-weight", "normal")
        .classed("rect-hovered", false);
    })

}

function initPage(data) {

    d3.select("#sp-rulename1")
        .text(data.name);

    d3.select("#sp-rulename2")
        .text(data.name);


    // d3.select("#mandatory").selectAll("text")
    //     .data(data.rules[0].mandatories)
    //     .enter().append("text")
    //         .text(function(d) {return `${d} `})

    // d3.select("#forbidden").selectAll("text")
    //     .data(data.rules[1].forbidden)
    //     .enter().append("text")
    //         .text(function(d) {return `${d} `})

    updateDetails(data.proteins[0]);
}

function updateDetails(protein){
    d3.select("#p-id").text(protein.id)
    d3.select("#p-length").text(`${protein.length} aa`)
    d3.select("#p-archNb").text(`${protein.architectures_nb}`)

    d3.select("#detail-hmmdomtbl tbody").selectAll("tr").remove()
    var rows = d3.select("#detail-hmmdomtbl tbody").selectAll("tr")
        .data(protein.domains)
        .enter().append("tr")
            .attr("id", function(d) {return `${d.name}-${d.start}` })

    rows.append("td").text(function(d) {return d.name})
    rows.append("td").text( d => d.start)
    rows.append("td").text( d => (d.start+d.length-1))
    rows.append("td").text( d => d.cevalue)
    rows.append("td").text( d => d.ievalue)
    rows.append("td").text( d => d.score)
}

