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
    show_legendary(ndx);
    show_avg_attack(ndx);
    show_avg_defense(ndx);
    show_avg_hitPoints(ndx);
    show_totalPower(ndx);
    
    show_leg_total_corr(ndx);

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



//------------------- Legendary bars

function show_legendary(ndx) {
    var dim = ndx.dimension(dc.pluck('Legendary'));
    var group = dim.group();

    dc.barChart("#legendary")
        .width(400)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Legendary")
        .yAxis().ticks(20);
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
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.Attack;
            p.average = p.total / p.count;
        }
        return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }

    var attackByType = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#avg-attack")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(attackByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
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
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.Defense;
            p.average = p.total / p.count;
        }
        return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }

    var defenseByType = dim.group().reduce(add_item, remove_item, initialise);
    
    dc.barChart("#avg-defense")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(defenseByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
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
        if(p.count == 0) {
            p.total = 0;
            p.average = 0;
        } else {
            p.total -= v.HP;
            p.average = p.total / p.count;
        }
        return p;
    }
    
    function initialise() {
        return {count: 0, total: 0, average: 0};
    }

    var defenseByType = dim.group().reduce(add_item, remove_item, initialise);
    
    dc.barChart("#avg-HP")
        .width(700)
        .height(300)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(defenseByType)
        .valueAccessor(function(d) {
            return d.value.average.toFixed(2);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .xAxisLabel("Type")
        .yAxisLabel("Average Hit Points")
        .yAxis().ticks(5);

}

// -------------- By Type pie chart

function show_totalPower(ndx) {
    var dim = ndx.dimension(dc.pluck('Type 1'));
    var group = dim.group();

    dc.pieChart('#total-pie')
        .height(400)
        .radius(600)
        .innerRadius(70)
        .dimension(dim)
        .group(group)
        .transitionDuration(1500);
}

// ---------- Legendary vs Total Power Scatter plot

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
        .width(800)
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
        .margins({top: 10, right: 50, bottom: 75, left: 75});
}