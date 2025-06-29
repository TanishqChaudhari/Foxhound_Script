//document.write("A third-party script is also being used. This script can be changed to act maliciously, intentioanlly or untentionally");

document.write("Hellooo..");
document.write("<br> I am a third-party script which provides a useful functionality!");

// This works on all devices/browsers, and uses IndexedDBShim as a final fallback 
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

// Open (or create) the database
var open = indexedDB.open("MyDatabase", 1);

// Create the schema
open.onupgradeneeded = function() {
    var db = open.result;
    var store = db.createObjectStore("MyObjectStore", {keyPath: "id"});
    var index = store.createIndex("NameIndex", ["name.last", "name.first"]);
};

open.onsuccess = function() {
    // Start a new transaction
    var db = open.result;
    var tx = db.transaction("MyObjectStore", "readwrite");
    var store = tx.objectStore("MyObjectStore");
    var index = store.index("NameIndex");

    // Add some data
    store.put({id: 12345, name: {first: "John", last: "Doe"}, age: 42});
    store.put({id: 67890, name: {first: "Bob", last: "Smith"}, age: 35});
    
    // Query the data
    var getJohn = store.get(12345);
    var getBob = index.get(["Smith", "Bob"]);

    getJohn.onsuccess = function() {
        console.log(getJohn.result.name.first);
        //document.write(getJohn.result.name.first);// => "John"
    };

    getBob.onsuccess = function() {
        console.log(getBob.result.name.first);
        //document.write(getJohn.result.name.first);// => "Bob"
    };

    // Close the db when the transaction is done
    tx.oncomplete = function() {
        db.close();
    };
}

//  if (localStorage.clickcount) {
//     localStorage.clickcount = Number(localStorage.clickcount)+1;
//   } else {
//     localStorage.clickcount = 1;
//   }
//   document.getElementById("demo").innerHTML = localStorage.clickcount;

//  <script type="text/javascript" src="http://www.google.com/jsapi"></script>
//     <script type="text/javascript">
//     function initialize() {
//         var loc = {};
//         var geocoder = new google.maps.Geocoder();
//         if(google.loader.ClientLocation) {
//             loc.lat = google.loader.ClientLocation.latitude;
//             loc.lng = google.loader.ClientLocation.longitude;

//             var latlng = new google.maps.LatLng(loc.lat, loc.lng);
//             geocoder.geocode({'latLng': latlng}, function(results, status) {
//                 if(status == google.maps.GeocoderStatus.OK) {
//                     alert(results[0]['formatted_address']);
//                 };
//             });
//         }
//     }

//     google.load("maps", "3.x", {other_params: "sensor=false", callback:initialize});
// </script>

setCookie('cookie2','value2',30);
document.write(localStorage.getItem("thik"));
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
name=getCookie('Cookie_consent')

   if(name!=""){
       //document.getElementById('cookie-consent-container').hidden = true;
       if(name=='true'){
           setCookie('Cookie_consent', "true", 30);
       }
   }

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// fetch('http://gayatripriyadarsini.pythonanywhere.com/', {
//   method: 'GET',
//   credentials: 'include',
// });
function accessCookieWithDelay(cookieName, delay) {
    setTimeout(() => {
        // Access cookies set by the host page
        const cookies = document.cookie;
        const cookieValue = cookies
            .split('; ')
            .find(row => row.startsWith(`${cookieName}=`))
            ?.split('=')[1];

        if (cookieValue) {
            console.log(`The value of the cookie "${cookieName}" is: ${cookieValue}`);
        } else {
            console.log(`Cookie "${cookieName}" not found.`);
        }
    }, delay);
}
accessCookieWithDelay("Cookie_consent", 3000);
