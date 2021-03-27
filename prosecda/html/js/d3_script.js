d3.json("./data.json").then(function(families) {

    initPage(families[0]);

    var famList = d3.select("#nav-content").selectAll("div")
        .data(families)
        .enter().append("div")
            .attr("class", "nav-famlist")
            .style("display", "block")
            .style("text-align", "left")
            .text(function (d) {
                return d.name;
            })

    d3.select(".nav-famlist").classed("fam-selected", true);

    famList.on("mouseover", function () {
        d3.select(this)
            .style("cursor", "pointer")
            .style("font-size", "14px")
            .style("font-style", "italic")
    }) 

    famList.on("mouseout", function () {
        d3.select(this).style("color", "black")
            .style("font-size", "13px")
            .style("font-style", "normal")
    })

    
    famList.on("click", function() {
        d3.selectAll(".fam-selected").classed("fam-selected", false);
        var _this = d3.select(this);
        if (_this.classed("fam-selected")) {
            _this.classed("fam-selected", false);
        } else {
            _this.classed("fam-selected", true);    
        }



        d3.select("#rule-summary .subtitle-header span").select("text").remove()
        d3.select("#rule-summary .subtitle-header span")
        .text(this.__data__.name)
        
        d3.select("#proteins-container .subtitle-header span").select("text").remove()
        d3.select("#proteins-container .subtitle-header span")
        .text(this.__data__.name)

        updateRuleSummary(this.__data__.rules);
        rmProteins();
        drawProteins(this.__data__.proteins);
        updateDetails(this.__data__.proteins[0]);
       
    })
                
});


function initPage(data) {
    d3.select("#sp-rulename1")
        .text(data.name);

    d3.select("#sp-rulename2")
        .text(data.name);

    updateRuleSummary(data.rules);
    updateDetails(data.proteins[0]);
    drawProteins(data.proteins);
}

const margin = {"top": 0, "right": 5, "bottom": 0, "left": 10};
const width = 800 - margin.left - margin.right;
const height = 60 - margin.top - margin.bottom;
const y_line = (height + margin.top + margin.bottom)/2;
const rect_height = 12;
const y_rect = y_line - rect_height/2;

function drawProteins(data) {
    var proteins = data
    var protein_length = proteins.map(function(d) {return +d.length;})

    var scale = d3.scaleLinear()
        .domain([0, d3.max(protein_length)])
        .range([0, width]);

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
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)

    var g = svg.append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    g.append("line")
        .attr("x1", scale(1))
        .attr("y1", y_line)
        .attr("x2", d => scale(+d.length))
        .attr("y2", y_line)
        .attr("stroke", "black")
        .attr("stroke-width", "2")

    var rect = g.selectAll("rect")
                .data(d => d.domains)
                .enter().append("rect")
                    .attr("x", d => scale(d.start))
                    .attr("y", y_rect)
                    .attr("height", rect_height)
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


function rmProteins() {
    d3.select("#proteins-draw").selectAll(".protein").remove()
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


function updateRuleSummary(rules) {
    d3.selectAll(".rule-table").selectAll("td").remove()

    d3.select(".rule-table .tr-name").selectAll("td")
        .data(rules.mandatories)
        .enter().append("td")
        .text(d => d.name)

    var legend = d3.select(".rule-table .tr-legend").selectAll("td")
    .data(rules.mandatories)
    .enter().append("td")

    legend.append("svg")
        .attr("width", 50)
        .attr("height", 20)
        .append("rect")
            .attr("x", 9)
            .attr("y", 4)
            .attr("height", "14")
            .attr("width", "40")
            .attr("fill", d => d.color)
            .attr("stroke", "black")
            .attr("fill-opacity", "0.85")
            .attr("rx", "8")
            .attr("ry", "8")

    d3.select(".rule-table .tr-cutoff").selectAll("td")
    .data(rules.mandatories)
    .enter().append("td")
    .text(d => d.evalue)

    if (rules.forbidden[0].name != "None") {
        d3.select(".rule-table .tr-name-forb").selectAll("td")
        .data(rules.forbidden)
        .enter().append("td")
        .text(d => d.name)

        var legend = d3.select(".rule-table .tr-legend-forb").selectAll("td")
        .data(rules.forbidden)
        .enter().append("td")

        legend.append("svg")
            .attr("width", 50)
            .attr("height", 20)
            .append("rect")
                .attr("x", 9)
                .attr("y", 4)
                .attr("height", "14")
                .attr("width", "40")
                .attr("fill", d => d.color)
                .attr("stroke", "black")
                .attr("fill-opacity", "0.85")
                .attr("rx", "8")
                .attr("ry", "8")
    }


}

