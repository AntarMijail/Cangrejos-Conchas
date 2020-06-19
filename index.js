/**
 * --------------------------------------------------------
 * This demo was created using amCharts V4 preview release.
 * 
 * V4 is the latest installement in amCharts data viz
 * library family, to be released in the first half of
 * 2018.
 *
 * For more information and documentation visit:
 * https://www.amcharts.com/docs/v4/
 * --------------------------------------------------------
 */


am4core.useTheme(am4themes_animated);
var chart = am4core.create("chartdiv", am4charts.ChordDiagram);


// colors of main characters
chart.colors.saturation = 0.40;
chart.colors.step = 0;
var colors = {}


// data was provided by: https://www.reddit.com/user/notrudedude

chart.data = [
// node property fields take data from data items where they are first mentioned, that's 
// why we add empty data items at the beginning and set colors here

// real data
{"from":"Dummy1","to":"Dummy1","value": 20,"color":"#FFFFFF"},
{"from":"Diogenidae","to":"Diogenidae","value":4,"color":"#FFFFFF"},
{"from":"Clibanarius tricolor","to":"Clibanarius tricolor","value":0,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Areopaguristes sp.","value":0,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Calcinus tibicen","value":0,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Paguristes tortugae","value":0,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Clibanarius antillensis","value":0,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Paguristes cadenati","value":0,"color":"#00000"},
{"from":"Paguristes wassi","to":"Paguristes wassi","value":0,"color":"#00000"},
{"from":"Paguristes puncticeps","to":"Paguristes puncticeps","value":0,"color":"#00000"},
{"from":"Paguridae","to":"Paguridae","value":3.5,"color":"#FFFFFF"},
{"from":"Pagurus provenzanoi","to":"Pagurus provenzanoi","value":0,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Pagurus brevidactylus","value":0,"color":"#00000"},
{"from":"Pagurus marshi","to":"Pagurus marshi","value":0,"color":"#00000"},
{"from":"Iridopagurus caribbensis","to":"Iridopagurus caribbensis","value":0,"color":"#00000"},
{"from":"Pagurus stimpsoni","to":"Pagurus stimpsoni","value":0,"color":"#00000"},
{"from":"Phimochirus randalli","to":"Phimochirus randalli","value":0,"color":"#00000"},
{"from":"Pylopagurus discoidalis","to":"Pylopagurus discoidalis","value":0,"color":"#00000"},
{"from":"Dummy2","to":"Dummy2","value": 20,"color":"#FFFFFF"},

{"from":"Scaphopoda sp.","to":"Scaphopoda sp.","value":0,"color":"#00000"},
{"from":"Gastropoda sp.","to":"Gastropoda sp.","value":0,"color":"#00000"},
{"from":"Nulo","to":"Nulo","value":1,"color":"#FFFFFF"},

{"from":"Lithopoma americanum","to":"Lithopoma americanum","value":0,"color":"#00000"},
{"from":"Turbinidae","to":"Turbinidae","value":.5,"color":"#FFFFFF"},

{"from":"Angiola lineata","to":"Angiola lineata","value":0,"color":"#00000"},
{"from":"Planaxidae","to":"Planaxidae","value":.5,"color":"#FFFFFF"},

{"from":"Phrontis alba","to":"Phrontis alba","value":0,"color":"#00000"},
{"from":"Nassariidae","to":"Nassariidae","value":.5,"color":"#FFFFFF"},

{"from":"Plicopurpura patula","to":"Plicopurpura patula","value":0,"color":"#00000"},
{"from":"Muricidae","to":"Muricidae","value":.5,"color":"#FFFFFF"},

{"from":"Modulus modulus","to":"Modulus modulus","value":0,"color":"#00000"},
{"from":"Modulidae","to":"Modulidae","value":.5,"color":"#FFFFFF"},

{"from":"Hemipolygona carinifera","to":"Hemipolygona carinifera","value":0,"color":"#00000"},
{"from":"Fasciolariidae","to":"Fasciolariidae","value":.5,"color":"#FFFFFF"},

{"from":"Echinus sp.","to":"Echinus sp.","value":0,"color":"#00000"},
{"from":"Echinidae","to":"Echinidae","value":.5,"color":"#FFFFFF"},

{"from":"Conus sp.","to":"Conus sp.","value":0,"color":"#00000"},
{"from":"Conidae","to":"Conidae","value":.5,"color":"#FFFFFF"},

{"from":"Colubraria testacea","to":"Colubraria testacea","value":0,"color":"#00000"},
{"from":"Colubrariidae","to":"Colubrariidae","value":.5,"color":"#FFFFFF"},

{"from":"Calliostoma javanicum","to":"Calliostoma javanicum","value":0,"color":"#00000"},
{"from":"Calliostomatidae","to":"Calliostomatidae","value":.5,"color":"#FFFFFF"},

{"from":"Bulla occidentalis","to":"Bulla occidentalis","value":0,"color":"#00000"},
{"from":"Bullidae","to":"Bullidae","value":.5,"color":"#FFFFFF"},

{"from":"Pisania pusio","to":"Pisania pusio","value":0,"color":"#00000"},
{"from":"Engina turbinella","to":"Engina turbinella","value":0,"color":"#00000"},
{"from":"Pisaniidae","to":"Pisaniidae","value":1,"color":"#FFFFFF"},

{"from":"Puperita pupa","to":"Puperita pupa","value":0,"color":"#00000"},
{"from":"Nerita tessellata","to":"Nerita tessellata","value":0,"color":"#00000"},
{"from":"Neritidae","to":"Neritidae","value":1,"color":"#FFFFFF"},

{"from":"Polinices lacteus","to":"Polinices lacteus","value":0,"color":"#00000"},
{"from":"Polinices hepaticus","to":"Polinices hepaticus","value":0,"color":"#00000"},
{"from":"Naticidae","to":"Naticidae","value":1,"color":"#FFFFFF"},
,
{"from":"Prunum sp.","to":"Prunum sp.","value":0,"color":"#00000"},
{"from":"Persicula persicula","to":"Persicula persicula","value":0,"color":"#00000"},
{"from":"Marginellidae","to":"Marginellidae","value":1,"color":"#FFFFFF"},

{"from":"Tegula sp.","to":"Tegula sp.","value":0,"color":"#00000"},
{"from":"Tegula fasciata","to":"Tegula fasciata","value":0,"color":"#00000"},
{"from":"Tegula lividomaculata","to":"Tegula lividomaculata","value":0,"color":"#00000"},
{"from":"Tegulidae","to":"Tegulidae","value":1.5,"color":"#FFFFFF"},

{"from":"Nitidella nitida","to":"Nitidella nitida","value":0,"color":"#00000"},
{"from":"Mitrella ocellata","to":"Mitrella ocellata","value":0,"color":"#00000"},
{"from":"Columbella mercatoria","to":"Columbella mercatoria","value":0,"color":"#00000"},
{"from":"Columbellidae","to":"Columbellidae","value":1.5,"color":"#FFFFFF"},

{"from":"Cenchritis muricatus","to":"Cenchritis muricatus","value":0,"color":"#00000"},
{"from":"Echinolittorina angustior","to":"Echinolittorina angustior","value":0,"color":"#00000"},
{"from":"Echinolittorina interrupta","to":"Echinolittorina interrupta","value":0,"color":"#00000"},
{"from":"Tectarius antonii","to":"Tectarius antonii","value":0,"color":"#00000"},
{"from":"Littorinidae","to":"Littorinidae","value":2,"color":"#FFFFFF"},

{"from":"Cerithium muscarum","to":"Cerithium muscarum","value":0,"color":"#00000"},
{"from":"Cerithium sp.","to":"Cerithium sp.","value":0,"color":"#00000"},
{"from":"Cerithium lutosum","to":"Cerithium lutosum","value":0,"color":"#00000"},
{"from":"Cerithium eburneum","to":"Cerithium eburneum","value":0,"color":"#00000"},
{"from":"Cerithium litteratum","to":"Cerithium litteratum","value":0,"color":"#00000"},
{"from":"Cerithiidae","to":"Cerithiidae","value":2.5,"color":"#FFFFFF"},

{"from":"Paguristes cadenati","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cenchritis muricatus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cenchritis muricatus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cenchritis muricatus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Puperita pupa","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tegula lividomaculata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tegula lividomaculata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina interrupta","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina interrupta","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Plicopurpura patula","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Tegula lividomaculata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Polinices hepaticus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Bulla occidentalis","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Bulla occidentalis","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Pagurus marshi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Bulla occidentalis","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Bulla occidentalis","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tectarius antonii","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Puperita pupa","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Puperita pupa","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Puperita pupa","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Puperita pupa","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cenchritis muricatus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina angustior","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina angustior","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina angustior","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinolittorina angustior","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinus sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Echinus sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium muscarum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium muscarum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nerita tessellata","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Bulla occidentalis","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Modulus modulus","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Lithopoma americanum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Angiola lineata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Pagurus stimpsoni","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Pagurus marshi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Lithopoma americanum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Pisania pusio","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Persicula persicula","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Engina turbinella","value":1,"color":"#00000"},
{"from":"Pylopagurus discoidalis","to":"Scaphopoda sp.","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Colubraria testacea","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Nitidella nitida","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tegula lividomaculata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Tegula lividomaculata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Mitrella ocellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Mitrella ocellata","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium lutosum","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Clibanarius antillensis","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Phrontis alba","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Gastropoda sp.","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Phimochirus randalli","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Clibanarius tricolor","to":"Prunum sp.","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Colubraria testacea","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Tegula sp.","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Nitidella nitida","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Conus sp.","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium sp.","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Iridopagurus caribbensis","to":"Polinices lacteus","value":1,"color":"#00000"},
{"from":"Paguristes wassi","to":"Calliostoma javanicum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Tegula fasciata","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Pagurus brevidactylus","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Paguristes tortugae","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Columbella mercatoria","value":1,"color":"#00000"},
{"from":"Areopaguristes sp.","to":"Cerithium eburneum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Cerithium litteratum","value":1,"color":"#00000"},
{"from":"Pagurus provenzanoi","to":"Polinices lacteus","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Polinices lacteus","value":1,"color":"#00000"},
{"from":"Paguristes puncticeps","to":"Hemipolygona carinifera","value":1,"color":"#00000"},
{"from":"Calcinus tibicen","to":"Lithopoma americanum","value":1,"color":"#00000"},
{"from":"Paguristes cadenati","to":"Cerithium litteratum","value":1,"color":"#00000"},






]



chart.dataFields.fromName = "from";
chart.dataFields.toName = "to";
chart.dataFields.value = "value";


chart.nodePadding = 0.99;
chart.minNodeSize = 0.001;
chart.startAngle = -80;
chart.endAngle = chart.startAngle + 360;
chart.sortBy = "";

var nodeTemplate = chart.nodes.template;
nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
nodeTemplate.showSystemTooltip = true;
nodeTemplate.propertyFields.fill = "color";
nodeTemplate.tooltipText = "{name} # of links= {total}";

// when rolled over the node, make all the links rolled-over
nodeTemplate.events.on("over", function (event) {    
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {
        if(dataItem.toNode){
            dataItem.link.isHover = true;
            dataItem.toNode.label.isHover = true;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = true;
            dataItem.fromNode.label.isHover = true;
        }
    }) 

    node.label.isHover = true;   
})

// when rolled out from the node, make all the links rolled-out
nodeTemplate.events.on("out", function (event) {
    var node = event.target;
    node.outgoingDataItems.each(function (dataItem) {        
        if(dataItem.toNode){
            dataItem.link.isHover = false;                
            dataItem.toNode.label.isHover = false;
        }
    })
    node.incomingDataItems.each(function (dataItem) {
        if(dataItem.fromNode){
            dataItem.link.isHover = false;
           dataItem.fromNode.label.isHover = false;
        }
    })

    node.label.isHover = false;
})

var label = nodeTemplate.label;
label.relativeRotation = 90;

label.fillOpacity = 0.25;
var labelHS = label.states.create("hover");
labelHS.properties.fillOpacity = 1;

nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
// this adapter makes non-main character nodes to be filled with color of the main character which he/she kissed most
nodeTemplate.adapter.add("fill", function (fill, target) {
    var node = target;
    var counters = {};
    var mainChar = false;
    node.incomingDataItems.each(function (dataItem) {
        if(colors[dataItem.toName]){
            mainChar = true;
        }

        if(isNaN(counters[dataItem.fromName])){
            counters[dataItem.fromName] = dataItem.value;
        }
        else{
            counters[dataItem.fromName] += dataItem.value;
        }
    })
    if(mainChar){
        return fill;
    }

    var count = 0;
    var color;
    var biggest = 0;
    var biggestName;

    for(var name in counters){
        if(counters[name] > biggest){
            biggestName = name;
            biggest = counters[name]; 
        }        
    }
    if(colors[biggestName]){
        fill = colors[biggestName];
    }
  
    return fill;
})

// link template
var linkTemplate = chart.links.template;
linkTemplate.strokeOpacity = 0;
linkTemplate.fillOpacity = 0.1;
linkTemplate.tooltipText = "{fromName} & {toName}";

var hoverState = linkTemplate.states.create("hover");
hoverState.properties.fillOpacity = 0.7;
hoverState.properties.strokeOpacity = 0.7;

// data credit label
var creditLabel = chart.chartContainer.createChild(am4core.TextLink);
creditLabel.text = "Data source: notrudedude";
creditLabel.url = "https://www.reddit.com/user/notrudedude";
creditLabel.y = am4core.percent(99);
creditLabel.x = am4core.percent(99);
creditLabel.horizontalCenter = "right";
creditLabel.verticalCenter = "bottom";

var titleImage = chart.chartContainer.createChild(am4core.Image);
titleImage.href = "";
titleImage.x = 30
titleImage.y = 30;
titleImage.width = 200;
titleImage.height = 200;