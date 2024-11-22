places =[{"placeName":"Normandy beaches","descrip":"D-Day landings on June 6, 1944 were a huge victory for the Allied forces.","latitude":49.33996347,"longitude":-0.5986427812},
{"placeName":"Utah Beach Museum ","descrip":"One of five sites that Allied forces invaded.","latitude":49.41543427,"longitude":-1.174608657},
{"placeName":"Omaha Beach","descrip":"American troops unsucuessfully launched an invasion from this site.","latitude":49.36464977,"longitude":-0.8636537512},
{"placeName":"Pointe de Hoc","descrip":"American troops scaled cliffs and disarmed Germans.","latitude":49.39535065,"longitude":-0.9879669086},
{"placeName":"Pegasus Bridge","descrip":"British forces captured this bridge on D-Day.","latitude":49.24241493,"longitude":-0.2717611591},
{"placeName":"Reichstag Building","descrip":"Soviet flag was raised on May 1945, marking the end of Nazi Germany.","latitude":52.51864715,"longitude":13.37618671},
{"placeName":"Auschwitz-Birkenau Memorial","descrip":"Site of the largest Nazi concentration camp.","latitude":50.02940955,"longitude":19.20549466},
{"placeName":"Anne Frank House","descrip":"Anne Frank hid here during Nazi occupation and wrote her famous diary.","latitude":52.37522689,"longitude":4.883975505},
{"placeName":"Adolf Hiter's bunker","descrip":"Nazi military headquarters and where Hitler died.","latitude":52.51253483,"longitude":13.3809759},
{"placeName":"Churchill's war rooms","descrip":"Underground bunker for Churchill and his war ministry. ","latitude":51.50216607,"longitude":-0.129357514},
{"placeName":"Imperial War Museum","descrip":"British museum displaying British and international WWII artifacts.","latitude":51.49585539,"longitude":-0.1086615775},
{"placeName":"Memorial de Caen","descrip":"Memorial dedicated to the Battle of Normandy and WWII.","latitude":49.19735593,"longitude":-0.3839811743},
{"placeName":"Battle of the Bulge","descrip":"Famous battlefield where Germans launched a surprise attack on the Allies.","latitude":50.02884524,"longitude":5.756414935},
{"placeName":"Normandy Memorial","descrip":"Memorial site dedicated to American soldiers who fell in D-Day landings.","latitude":49.35922513,"longitude":-0.8554058653},
{"placeName":"Berlin Wall","descrip":"Represents German unification after WWII and the Cold War.","latitude":52.53507581,"longitude":13.39019316},
{"placeName":"Dachau Memorial","descrip":"The first Nazi concentration camp.","latitude":48.26694706,"longitude":11.46649098},
{"placeName":"French Tomb of the Unknown Soldier","descrip":"Unidentified French soldier representing all missing WWII soldiers.","latitude":48.87380364,"longitude":2.295106929},
{"placeName":"Nuremberg Trials Courthouse","descrip":"Nazi war criminals were charged for WWII crimes here.","latitude":49.45440372,"longitude":11.04820853},
{"placeName":"Calais Memorial","descrip":"British forces lost to Germans, who sent remaining soldiers to prisoner camps.","latitude":50.96728948,"longitude":1.844561411},
{"placeName":"Warsaw Uprising Museum","descrip":"Commemorates the Warsaw Uprising of 1944 where the Polish resisted Nazi occupation.","latitude":52.2328695,"longitude":20.98103262}]

let map = L.map('places').setView([50.773714, 9.424124], 5.21);

L.tileLayer('https://api.mapbox.com/styles/v1/kaijohnsen/cm3tata8w000401s0fu0fhrdn/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2Fpam9obnNlbiIsImEiOiJjbTNycXV2N2kwOHF0MmtvbzB5NzI5eXc2In0.3pCQ-ibm2wul4D43wT13hw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
    L.marker( [places[i].latitude, places[i].longitude ] )
    .bindPopup ( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i]. descrip + '</p>')
    .addTo ( map );
}