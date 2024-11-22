let map = L.map('map').setView([40.732112, -73.991625], 15.41);

L.tileLayer('https://api.mapbox.com/styles/v1/kaijohnsen/cm3rr7hbx000v01rydh535arq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2Fpam9obnNlbiIsImEiOiJjbTNycXV2N2kwOHF0MmtvbzB5NzI5eXc2In0.3pCQ-ibm2wul4D43wT13hw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

let marker1 = L.marker([40.733444761864305, -73.98830413974846]).addTo(map);
let marker2 = L.marker([40.73012986791758, -73.99784802801359]).addTo(map);
let marker3 = L.marker([40.73326297998695, -73.99095394652083]).addTo(map);
let marker4 = L.marker([40.736988093862145, -73.9897123953326]).addTo(map);

marker1.bindPopup("I lived at the NYU dorm called Palladium Hall.");
marker2.bindPopup("I attended lectures at the Kimmel Center for University Life.");
marker3.bindPopup("I bought books at the Strand Bookstore for a group project.");
marker4.bindPopup("I met the store managers of the largest Barnes and Noble store in the country.");

marker1.openPopup();

    

