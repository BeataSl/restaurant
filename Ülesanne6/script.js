(function() {
    "use strict";
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        let c = document.getElementById("clock");
       
        setInterval(updateClock, 1000);
        
        function updateClock() {
            
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            h %= 12;
            if (h < 10) {
                h = "0" + h ;
            }
            
            if (h == 10 && h == 11 && h == 12) {
                h = h ;
            }
    
            if (m < 10) {
            m = "0" + m;
            }
            if (s < 10) {
            s = "0" + s;
            }
            c.innerHTML = h + ":" + m + ":" + s;    
            };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        let linn = document.getElementById("linn");
        if (linn.value === "") { 
            alert("Palun valige linn nimekirjast");  
            linn.focus();  
            return;  
        }
        event.preventDefault();
        if (document.getElementById('yes').checked || document.getElementById('no').checked ) { 
        } else {
            alert("Palun valige, kas soovite jälgide meid");  
        }
    

        if (linn.value == "tln"){
            e.innerHTML = "0 &euro;";        
        }
        if (linn.value == "trt"){
            e.innerHTML = "2.50 &euro;";        
        }
        if (linn.value == "nrv"){
            e.innerHTML = "2.50 &euro;";        
        }
        if (linn.value == "prn"){
            e.innerHTML = "3.00 &euro;";        
        }

        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";
let map;
function GetMap() {
    "use strict";


    let centerPoint = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );

        
    let centerPoint2 = new Microsoft.Maps.Location(
            58.365985,
            25.579721
        );

    
    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 9,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Tartu',
        });
    let pushpin2 = new Microsoft.Maps.Pushpin(centerPoint2, {
            title: 'Viljandi',
        });


    map.entities.push(pushpin);
    map.entities.push(pushpin2);

}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE
