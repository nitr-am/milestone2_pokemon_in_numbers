queue()
    .defer(d3.csv, "data/pokemon_data.csv")
    .await(makeGraphs);

function makeGraphs(error, pokeData) {
    var ndx = crossfilter(pokeData);

    pokeData.forEach(function(d) {
        d.Attack = parseInt(d.Attack);
        d.Defense = parseInt(d.Defense);
        d.HP = parseInt(d.HP);
        d.Total = parseInt(d.Total);
    })


    show_name_selector(ndx);
    show_type_selector(ndx);
    show_perc_legend(ndx, 'True', '#legend-perc');
    show_perc_legend(ndx, 'False', '#non-legend-perc');
    show_legendary(ndx);
    show_avg_attack(ndx);
    show_avg_defense(ndx);
    show_avg_hitPoints(ndx);
    show_totalPower(ndx);
    show_leg_total_corr(ndx);
    show_data_table(ndx);

    dc.renderAll();

}

//-----------------Selector by Name

function show_name_selector(ndx) {
    var dim = ndx.dimension(dc.pluck("Name"));
    var group = dim.group();

    dc.selectMenu("#name-selector")
        .dimension(dim)
        .group(group);
}



//-----------------Selector by Type

function show_type_selector(ndx) {
    var dim = ndx.dimension(dc.pluck("Type 1"));
    var group = dim.group();

    dc.selectMenu("#type-selector")
        .dimension(dim)
        .group(group);
}

// -------- Pecentage of legendary

function show_perc_legend(ndx, legend, element) {
    var percOfLegendary = ndx.groupAll().reduce(
        function(p, v) {
            if (v.Legendary === legend) {
                p.count++;
                
            }
            return p;
        },
        function(p, v) {
            if (v.Legendary === legend ) {
                p.count--;
            }
            return p;
        },
        function() {
            return {count: 0};
        }
    );
    
    dc.numberDisplay(element)
        .formatNumber(d3.format('.2%'))
        .valueAccessor(function (d) {
            if (d.count == 0) {
                return 0;
            } else {
                return (d.count/800)
            }
        })
        .group(percOfLegendary);
}

//------------------- Legendary bars

function show_legendary(ndx) {
    var dim = ndx.dimension(dc.pluck('Legendary'));
    var group = dim.group();

    dc.barChart("#legendary")
        .width(200)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Legendary")
        .yAxis().ticks(20);
}

// -------------- Pie chart by Type
// know how credits to shark attack project mentioned on the readme file

function show_totalPower(ndx) {
    var dim = ndx.dimension(dc.pluck('Type 1'));
    var group = dim.group();

    dc.pieChart('#total-pie')
        .height(300)
        .radius(400)
        .innerRadius(70)
        .dimension(dim)
        .group(group)
        .transitionDuration(1500);
}


// ---------------------- Average Attack

function show_avg_attack(ndx) {
    var dim = ndx.dimension(dc.pluck('Type 1'));

    function add_item(p, v) {
        p.count++;
        p.total += v.Attack;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.Attack;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var attackByType = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#avg-attack")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 })
        .dimension(dim)
        .group(attackByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type of Pokemon")
        .yAxisLabel("Average Attack Power")
        .yAxis().ticks(5);

}

// ------------------ Average Defense

function show_avg_defense(ndx) {
    var dim = ndx.dimension(dc.pluck('Type 1'));

    function add_item(p, v) {
        p.count++;
        p.total += v.Defense;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.Defense;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var defenseByType = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#avg-defense")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 })
        .dimension(dim)
        .group(defenseByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type of Pokemon")
        .yAxisLabel("Average Defense Power")
        .yAxis().ticks(5);

}


// ------------------ Average Hit Points

function show_avg_hitPoints(ndx) {
    var dim = ndx.dimension(dc.pluck('Type 1'));

    function add_item(p, v) {
        p.count++;
        p.total += v.HP;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.HP;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var defenseByType = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#avg-HP")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 })
        .dimension(dim)
        .group(defenseByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type of Pokemon")
        .yAxisLabel("Average Hit Points")
        .yAxis().ticks(5);

}

// ---------- Scatter plot Legendary vs Total Power 

function show_leg_total_corr(ndx) {

    var legendaryColors = d3.scale.ordinal()
        .domain(['True', 'False'])
        .range(['green', 'blue']);

    var pDim = ndx.dimension(dc.pluck("Total"));
    var pwrDim = ndx.dimension(function(d) {
        return [d.Total, d.Speed, d.Name, d.Legendary];
    });
    var LegendaryVsPwrGroup = pwrDim.group();

    var minPower = pDim.bottom(1)[0].Total;
    var maxPower = pDim.top(1)[0].Total;
    var minSpeed = pwrDim.bottom(1)[0].Speed;
    var maxSpeed = pwrDim.top(1)[0].Speed;

    dc.scatterPlot("#leg-total-corr")
        .width(700)
        .height(400)
        .x(d3.scale.linear().domain([minPower, maxPower]))
        .y(d3.scale.linear().domain([minSpeed, maxSpeed]))
        .brushOn(false)
        .symbolSize(7)
        .clipPadding(10)
        .xAxisLabel("Total Power")
        .yAxisLabel("Speed")
        .title(function(d) {
            return d.key[2] + " Speed " + d.key[1];
        })
        .colorAccessor(function(d) {
            return d.key[3];
        })
        .colors(legendaryColors)
        .dimension(pwrDim)
        .group(LegendaryVsPwrGroup)
        .margins({ top: 10, right: 50, bottom: 50, left: 50 });
}

// ---------- Table
// --- Table done with the help of the one done in the shark project mentioned on the readme file. Also with the help of Data & the DOM unit from the course

function show_data_table(ndx) {

var dim = ndx.dimension(function(d) { return d.dim; });


var table = dc.dataTable("#dc-data-table")

     .dimension(dim)
     .group(function(d) { return ""; })
     .size(10)
     
     .columns([
        function(d) { return d.Name; },
        function(d) { return d['Type 1']; },
        function(d) { return d.HP; },
        function(d) { return d.Attack; },
        function(d) { return d.Defense; },
        function(d) { return d['Sp. Atk']; },
        function(d) { return d['Sp. Def']; },
        function(d) { return d.Speed; },
        function(d) { return d.Legendary; },
        function(d) { return d.Total; },
        
     ]).sortBy(function(d) {
            return d.Total;
     })
     .order(d3.descending)
}

// ------------- Open the form to send an email. 

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// ------------ Jquery-------------

$(document).ready(function() {

$('#contact-button').click(function() {
        $('.contact-form').slideToggle('slow');
    })   
    
//------- Button in the navbar


$('#button1').click(function() {
        $('#para1').slideToggle('slow', );
    })
});

// --------- Reset graphs
function reset() {
    window.location.reload()
}