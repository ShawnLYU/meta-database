//////////////////////////////////////////////////////// op
Highcharts.chart('Phylum_op_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Oropharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Firmicutes", y:29.9228 },
            {name: "Unclassified", y:23.0920, sliced: true, selected: true},
            {name: "Bacteroidetes", y:21.9115 },
            {name: "Proteobacteria", y:12.5073 },
            {name: "Actinobacteria", y:9.4388 },
            {name: "Fusobacteria", y:3.0082 },
            {name: "Tenericutes", y:0.0686 },
            {name: "Spirochaetes", y:0.0398 },
            {name: "Candidatus Saccharibacteria", y:0.0094 },
            {name: "Cyanobacteria", y:0.0004 },
            {name: "Nitrospirae", y:0.0002 },
            {name: "Deinococcus-Thermus", y:0.0001 },
            {name: "Chlorobi", y:0.0001 },
            {name: "Synergistetes", y:0.0001 },
            {name: "Chlamydiae", y:0.0001 }
        ]
    }]
});
Highcharts.chart('Genus_op_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Oropharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Unclassified", y:28.4830 },
            {name: "Prevotella", y:18.7926, sliced: true, selected: true},
            {name: "Streptococcus", y:13.2282 },
            {name: "Veillonella", y:5.8526 },
            {name: "Neisseria", y:5.5187 },
            {name: "Rothia", y:3.5913 },
            {name: "Actinomyces", y:3.2882 },
            {name: "Staphylococcus", y:2.6362 },
            {name: "Haemophilus", y:2.3148 },
            {name: "Leptotrichia", y:1.4989 },
            {name: "Peptoniphilus", y:1.2330 },
            {name: "Acinetobacter", y:1.1911 },
            {name: "Granulicatella", y:1.1634 },
            {name: "Fusobacterium", y:1.1000 },
            {name: "Atopobium", y:0.8463 }
        ]
    }]
});
Highcharts.chart('Species_op_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Oropharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Unclassifie", y:    55.5028, sliced: true, selected: true},
            {name: "Prevotella melaninogenic", y:   3.50319},
            {name: "Prevotella histicol", y:    2.5744},
            {name: "Prevotella sp", y:  2.35983},
            {name: "Rothia mucilaginos", y:     2.13796},
            {name: "Streptococcus parasanguini", y:     1.95179},
            {name: "Prevotella pallen", y:  1.80462},
            {name: "Streptococcus sp", y:   1.78913},
            {name: "Staphylococcus aureu", y:   1.63875},
            {name: "Neisseria subflav", y:  1.28294},
            {name: "Veillonella atypic", y:     1.27725},
            {name: "Streptococcus pseudopneumonia", y:  1.1943},
            {name: "Neisseria flavescen", y:    1.09725},
            {name: "Prevotella saliva", y:  0.858959},
            {name: "Acinetobacter baumanni", y:     0.753785},
        ]
    }]
});
//////////////////////////////////////////////////////// NP
Highcharts.chart('Phylum_np_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Nasopharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Firmicutes",y:56.4767},
            {name: "Proteobacteria",y:21.1863, sliced: true, selected: true},
            {name: "Unclassified",y:10.9035},
            {name: "Actinobacteria",y:5.5105},
            {name: "Bacteroidetes",y:5.4922},
            {name: "Tenericutes",y:0.3619},
            {name: "Fusobacteria",y:0.0637},
            {name: "Spirochaetes",y:0.0024},
            {name: "Deinococcus-Thermus",y:0.0017},
            {name: "Cyanobacteria",y:0.0004},
            {name: "Candidatus_Saccharibacteria",y:0.0003},
            {name: "Synergistetes",y:0.0002},
            {name: "Verrucomicrobia",y:0.0001},
        ]
    }]
});

Highcharts.chart('Genus_np_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Nasopharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Staphylococcus",y:45.9709},
            {name: "Acinetobacter",y:15.9561, sliced: true, selected: true},
            {name: "Unclassified",y:10.2326},
            {name: "Streptococcus",y:5.3611},
            {name: "Corynebacterium",y:4.0519},
            {name: "Bacteroides",y:3.3639},
            {name: "Mastadenovirus",y:2.7745},
            {name: "Prevotella",y:1.4743},
            {name: "Blautia",y:1.1702},
            {name: "Ralstonia",y:0.9084},
            {name: "Haemophilus",y:0.7787},
            {name: "Klebsiella",y:0.7625},
            {name: "Veillonella",y:0.7130},
            {name: "Escherichia",y:0.6237},
            {name: "Dolosigranulum",y:0.4774},
        ]
    }]
});

Highcharts.chart('Species_np_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in Nasopharynx'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name:"Staphylococcus aureus",y:27.8951},
            {name:"Unclassified",y:19.3576, sliced: true, selected: true},
            {name:"Staphylococcus epidermidis",y:7.6282},
            {name:"Staphylococcus haemolyticus",y:5.1094},
            {name:"Acinetobacter sp. DUT-2",y:3.7700},
            {name:"Acinetobacter calcoaceticus",y:3.3158},
            {name:"Acinetobacter baumannii",y:3.1810},
            {name:"Acinetobacter pittii",y:2.8416},
            {name:"Bacteroides vulgatus",y:2.0428},
            {name:"Human mastadenovirus B",y:1.9342},
            {name:"Corynebacterium accolens",y:1.9174},
            {name:"Streptococcus pneumoniae",y:1.6433},
            {name:"[Ruminococcus] gnavus",y:1.0971},
            {name:"Staphylococcus hominis",y:1.0664},
            {name:"Klebsiella pneumoniae",y:0.7455},
        ]
    }]
});
//////////////////////////////////////////////////////// lung
Highcharts.chart('Phylum_lung_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in lung'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
        { 
            name : "Firmicutes", 
            y:  92.5185,
            sliced: true,
            selected: true
            },
        { name : "Unclassified", y: 5.0874 },
        { name : "Proteobacteria", y:   1.0917 },
        { name : "Tenericutes", y:  0.7414 },
        { name : "Bacteroidetes", y:    0.2451 },
        { name : "Actinobacteria", y:   0.1823 },
        { name : "Cyanobacteria", y:    0.1201 },
        { name : "Euryarchaeota", y:    0.0103 },
        { name : "Fusobacteria", y: 0.0022 },
        { name : "Chlamydiae", y:   0.0004 },
        { name : "Spirochaetes", y: 0.0003 },
        { name : "Verrucomicrobia", y:  0.0001 },
        { name : "Gemmatimonadetes", y: 0.0000 },
        { name : "Deinococcus-Thermus", y:  0.0000 },
        { name : "Candidatus_Saccharibacteria", y:  0.0000 }
        ]
    }]
});
Highcharts.chart('Genus_lung_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in lung'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name: "Staphylococcus", y: 75.8607 },
            {
                name: "Bacillus", 
                y:  14.5496,
                sliced: true,
                selected: true,
            },
            {name: "Unclassified", y:   5.4258 },
            {name: "Streptococcus", y:  0.9159 },
            {name: "Mycoplasma", y: 0.7408 },
            {name: "Mastadenovirus", y: 0.5650 },
            {name: "Haemophilus", y:    0.2816 },
            {name: "Pseudomonas", y:    0.2682 },
            {name: "Enterobacter", y:   0.1519 },
            {name: "Bacteroides", y:    0.1289 },
            {name: "Microcystis", y:    0.1123 },
            {name: "Gemella", y:    0.0999 },
            {name: "Prevotella", y: 0.0914 },
            {name: "Escherichia", y:    0.0647 },
            {name: "Faecalibacterium", y:   0.0613 }
        ]
    }]
});
Highcharts.chart('Species_lung_pie', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Microbiome composition in lung'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [
            {name:"Staphylococcus aureus",y:51.5443 },
            {
                name:"Staphylococcus epidermidis",
                y:20.0261,
                sliced: true,
                selected: true  
            },
            {name:"Bacillus cereus",y:9.9344 },
            {name:"Unclassified",y:9.6185 },
            {name:"Bacillus anthracis",y:1.7322 },
            {name:"Bacillus wiedmannii",y:1.1291 },
            {name:"Staphylococcus hominis",y:0.7597 },
            {name:"Mycoplasma pneumoniae",y:0.7314 },
            {name:"Human mastadenovirus B",y:0.5399 },
            {name:"Staphylococcus schweitzeri",y:0.3953 },
            {name:"Bacillus thuringiensis",y:0.3327 },
            {name:"Staphylococcus caprae",y:0.2892 },
            {name:"Haemophilus influenzae",y:0.2455 },
            {name:"Streptococcus agalactiae",y:0.2181 },
            {name:"Streptococcus pneumoniae",y:0.2148 }
        ]
    }]
});