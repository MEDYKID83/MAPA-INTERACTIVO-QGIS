var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TUNGURAHUA_CANT_1 = new ol.format.GeoJSON();
var features_TUNGURAHUA_CANT_1 = format_TUNGURAHUA_CANT_1.readFeatures(json_TUNGURAHUA_CANT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUNGURAHUA_CANT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUNGURAHUA_CANT_1.addFeatures(features_TUNGURAHUA_CANT_1);
var lyr_TUNGURAHUA_CANT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TUNGURAHUA_CANT_1, 
                style: style_TUNGURAHUA_CANT_1,
                popuplayertitle: "TUNGURAHUA_CANT",
                interactive: true,
    title: 'TUNGURAHUA_CANT<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_0.png" /> AMBATO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_1.png" /> BANOS DE AGUA SANTA<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_2.png" /> CEVALLOS<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_3.png" /> MOCHA<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_4.png" /> PATATE<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_5.png" /> QUERO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_6.png" /> SAN PEDRO DE PELILEO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_7.png" /> SANTIAGO DE PILLARO<br />\
    <img src="styles/legend/TUNGURAHUA_CANT_1_8.png" /> TISALEO<br />'
        });
var format_FOCO2_2 = new ol.format.GeoJSON();
var features_FOCO2_2 = format_FOCO2_2.readFeatures(json_FOCO2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOCO2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOCO2_2.addFeatures(features_FOCO2_2);
var lyr_FOCO2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOCO2_2, 
                style: style_FOCO2_2,
                popuplayertitle: "FOCO2",
                interactive: true,
                title: '<img src="styles/legend/FOCO2_2.png" /> FOCO2'
            });
var format_PERIFOCALGANADERIA_3 = new ol.format.GeoJSON();
var features_PERIFOCALGANADERIA_3 = format_PERIFOCALGANADERIA_3.readFeatures(json_PERIFOCALGANADERIA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIFOCALGANADERIA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIFOCALGANADERIA_3.addFeatures(features_PERIFOCALGANADERIA_3);
var lyr_PERIFOCALGANADERIA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIFOCALGANADERIA_3, 
                style: style_PERIFOCALGANADERIA_3,
                popuplayertitle: "PERIFOCAL GANADERIA",
                interactive: true,
                title: '<img src="styles/legend/PERIFOCALGANADERIA_3.png" /> PERIFOCAL GANADERIA'
            });
var format_FOCO2_MultiRingBuffer_4 = new ol.format.GeoJSON();
var features_FOCO2_MultiRingBuffer_4 = format_FOCO2_MultiRingBuffer_4.readFeatures(json_FOCO2_MultiRingBuffer_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FOCO2_MultiRingBuffer_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FOCO2_MultiRingBuffer_4.addFeatures(features_FOCO2_MultiRingBuffer_4);
var lyr_FOCO2_MultiRingBuffer_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FOCO2_MultiRingBuffer_4, 
                style: style_FOCO2_MultiRingBuffer_4,
                popuplayertitle: "FOCO2_MultiRingBuffer",
                interactive: true,
                title: '<img src="styles/legend/FOCO2_MultiRingBuffer_4.png" /> FOCO2_MultiRingBuffer'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_TUNGURAHUA_CANT_1.setVisible(true);lyr_FOCO2_2.setVisible(true);lyr_PERIFOCALGANADERIA_3.setVisible(true);lyr_FOCO2_MultiRingBuffer_4.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_TUNGURAHUA_CANT_1,lyr_FOCO2_2,lyr_PERIFOCALGANADERIA_3,lyr_FOCO2_MultiRingBuffer_4];
lyr_TUNGURAHUA_CANT_1.set('fieldAliases', {'DPA_VALOR': 'DPA_VALOR', 'DPA_ANIO': 'DPA_ANIO', 'DPA_CANTON': 'DPA_CANTON', 'DPA_DESCAN': 'DPA_DESCAN', 'DPA_PROVIN': 'DPA_PROVIN', 'DPA_DESPRO': 'DPA_DESPRO', 'UNION': 'UNION', });
lyr_FOCO2_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', 'FOCO': 'FOCO', });
lyr_PERIFOCALGANADERIA_3.set('fieldAliases', {'n': 'n', 'x': 'x', 'y': 'y', 'cant': 'cant', });
lyr_FOCO2_MultiRingBuffer_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Z': 'Z', 'FOCO': 'FOCO', 'mrb_dist': 'mrb_dist', });
lyr_TUNGURAHUA_CANT_1.set('fieldImages', {'DPA_VALOR': 'Range', 'DPA_ANIO': 'TextEdit', 'DPA_CANTON': 'TextEdit', 'DPA_DESCAN': 'TextEdit', 'DPA_PROVIN': 'TextEdit', 'DPA_DESPRO': 'TextEdit', 'UNION': 'TextEdit', });
lyr_FOCO2_2.set('fieldImages', {'X': '', 'Y': '', 'Z': '', 'FOCO': '', });
lyr_PERIFOCALGANADERIA_3.set('fieldImages', {'n': '', 'x': '', 'y': '', 'cant': '', });
lyr_FOCO2_MultiRingBuffer_4.set('fieldImages', {'X': 'Range', 'Y': 'Range', 'Z': 'Range', 'FOCO': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_TUNGURAHUA_CANT_1.set('fieldLabels', {'DPA_VALOR': 'hidden field', 'DPA_ANIO': 'hidden field', 'DPA_CANTON': 'hidden field', 'DPA_DESCAN': 'inline label - always visible', 'DPA_PROVIN': 'hidden field', 'DPA_DESPRO': 'hidden field', 'UNION': 'hidden field', });
lyr_FOCO2_2.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'FOCO': 'no label', });
lyr_PERIFOCALGANADERIA_3.set('fieldLabels', {'n': 'no label', 'x': 'no label', 'y': 'no label', 'cant': 'no label', });
lyr_FOCO2_MultiRingBuffer_4.set('fieldLabels', {'X': 'hidden field', 'Y': 'hidden field', 'Z': 'hidden field', 'FOCO': 'hidden field', 'mrb_dist': 'hidden field', });
lyr_FOCO2_MultiRingBuffer_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});