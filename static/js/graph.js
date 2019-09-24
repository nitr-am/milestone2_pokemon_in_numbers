queue()
    .defer(d3.csv, "data/pokemon_data.csv")
    .await(makeGraphs);

function makeGraphs(error, pokeData) {
    var ndx = crossfilter(pokeData);
    
    pokeData.forEach(function(d) {
        d.Attack = parseInt(d.Attack);
    })
    pokeData.forEach(function(d) {
        d.Defense = parseInt(d.Defense);
    })
    pokeData.forEach(function(d) {
        d.HP = parseInt(d.HP);
    })

    show_type_selector(ndx);
    show_legendary(ndx);
    show_avg_attack(ndx);
    show_avg_defense(ndx);
    show_avg_hitPoints(ndx);

    dc.renderAll();

}

function show_type_selector(ndx) {
    var dim = ndx.dimension(dc.pluck("Type 1"));
    var group = dim.group();

    dc.selectMenu("#type-selector")
        .dimension(dim)
        .group(group);
}


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