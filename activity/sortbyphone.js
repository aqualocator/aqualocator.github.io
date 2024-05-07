describe("aquaguide activity", () => {
    var db;
    before(() => {
        var config = {
            apiKey: "AIzaSyBu4FaHCylofeNVO5gHkyS4IYFcYZLOiA4",
            authDomain: "aquaguide2018.firebaseio.com",
            projectId: "aquaguide2018"
        };
        var app = firebase.initializeApp(config);
        db = firebase.firestore(app);
        //firebase.firestore.setLogLevel("debug");
    });

    it("initialize database", () => {
      // [START initialize_persistence]
      firebase.initializeApp({
         apiKey: "AIzaSyBu4FaHCylofeNVO5gHkyS4IYFcYZLOiA4",
            authDomain: "aquaguide2018.firebaseio.com",
            projectId: "aquaguide2018",
      }
      // [START_EXCLUDE silent]
      ,"persisted_app"
      // [END_EXCLUDE]
      );
    });
     it("sorting by phonename asc and date desc", () => {
   db.collection("users").orderBy("device","asc")
    .onSnapshot(function(querySnapshot){
        var peeps = [];
        querySnapshot.forEach(function(doc) {
            var mydate = new Date(doc.data().date);
            peeps.push("<br>" + doc.data().device + ", " + mydate.toLocaleString() + ", " + doc.data().visited);
        });
        document.getElementById("message").innerHTML = "Current activity: " +  "<br>" + peeps.join(" ");
    });
         });
});
