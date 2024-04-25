describe("Aqua Visitor Management System - Activity Log", () => {
    var db;
    before(() => {
        var config = {
            apiKey: "AIzaSyC_Wl1RgIWazRk3OhodD5QQTykOcIyZMNs",
            authDomain: "aquacheckin-e0b0b.firebaseapp.com",
            projectId: "aquacheckin-e0b0b"
        };
        var app = firebase.initializeApp(config);
        db = firebase.firestore(app);
        //firebase.firestore.setLogLevel("debug");
    });

    it("initialize database", () => {
      // [START initialize_persistence]
      firebase.initializeApp({
            apiKey: "AIzaSyC_Wl1RgIWazRk3OhodD5QQTykOcIyZMNs",
            authDomain: "aquacheckin-e0b0b.firebaseapp.com",
            projectId: "aquacheckin-e0b0b"
      }
      // [START_EXCLUDE silent]
      ,"persisted_app"
      // [END_EXCLUDE]
      );
    });
     it("active listening turned on", () => {
   db.collection("log").orderBy("date", "desc")
    .onSnapshot(function(querySnapshot) {
        var peeps = [];
        var dt = [];
        querySnapshot.forEach(function(doc) {
            var mydate = new Date(doc.data().date);
             var checkin = doc.data().checkin;
             var checkout = doc.data().checkout;
            
            if (checkin.length === 0) {
  checkin = "";
            }else {
                mydate = doc.data().checkin;
                checkin = ", Checkin"; // + doc.data().checkin;
            }

            if (checkout.length === 0) {
   checkout = "";
        }else {
                checkin = "";   
                mydate = doc.data().checkout;
                checkout = ", Checkout";// + doc.data().checkout;
            }
            //text.substring(0, 15);
            dt.push(mydate.toLocaleString());
            peeps.push("<br>" + mydate.toLocaleString() + checkin + checkout + ", " + doc.data().firstname + " " + doc.data().lastname  + ", " + doc.data().company + ", Visiting: " + doc.data().message);
        });
        console.log(peeps.length);
        document.getElementById("message").innerHTML = "Current activity: " +  "<br>" + peeps.join(" ");
        setInterval(function(){
            currentTime = getDateTime();
            document.getElementById("leads").innerHTML = "Current activity: " +  "<br>" + "VMS live activity log: " + dt[dt.length - 1] + " through " + getDateTime();
        }, 1000);
       
    });
         });
});

     function getDateTime() {
         var options = {
             month: 'numeric',
             day: 'numeric',
             year: 'numeric',
             hour: 'numeric',
             minute: 'numeric',
             second: 'numeric',
             hour12: true
         };
         var now     = new Date(); 
         var year    = now.getFullYear();
         var month   = now.getMonth()+1; 
         var day     = now.getDate();
         var hour    = now.getHours();
         var minute  = now.getMinutes();
         var second  = now.getSeconds(); 
         if(month.toString().length == 1) {
             month = '0'+month;
         }
         if(day.toString().length == 1) {
             day = '0'+day;
         }   
         if(hour.toString().length == 1) {
             hour = '0'+hour;
         }
         if(minute.toString().length == 1) {
             minute = '0'+minute;
         }
         if(second.toString().length == 1) {
             second = '0'+second;
         }   
         var ampm = (hour >= 12) ? "PM" : "AM";
         var dateTime = month+'/'+day+'/'+year+', '+hour+':'+minute+':'+second+ ' ' + ampm;  
         var dateTime2 = month+'/'+day+'/'+year+', '+hour+':'+minute+':'+second
         var formatteddate = new Date(dateTime2).toLocaleString('en-US', options);
         dateTime = formatteddate;
         return dateTime;
     }
