var result, e, l, s, i, keys, k, ser, type, m, sl, fm, lsss;
var firebaseConfig = {};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Get a reference to the database service
database = firebase.database().ref().child('locations');
console.log(database);
$("#sel1").append('<option>Select Your location</option>');
database.on('child_added', snap => {
    console.log(snap.val());
    l = snap.child("name").val();
    console.log(l);
  /***
   *
   *  below code not able to open yourModel
   *  Use onchange Event for trigger openModel
   *   id="servmodal" ID should be unique in a HTML page, never use it more than once that will make confusion
   *
   *  just google as follows,
   *
   *  how to open and close modal popup using javascript
   */
  $("#sel1").append('<option class="btn" id="' + l + '" value="' + l + '" data-toggle="modal" data-target="#servmodal">' + l + '</option>');
});

function sh() {
    e = document.getElementById('sel1');
    result = e.options[e.selectedIndex].value;
    console.log(result);
    ser = firebase.database().ref().child('locations/' + result);
    console.log(ser);
    ser.on('value', snap => {
        console.log(snap.val());
        s = snap.child("services").val();
        keys = Object.keys(s);
        console.log(keys);
        for (i = 0; i < keys.length; i++) {
            m = keys[i];
            $("#servm").append('<tr><td class="btn" id="lss" value="' + m + '" onclick= "ls(\'' + m + '\')">' + m + '<td></tr>');
        }
    });
}

function ls(type) {
    lsss = type;
    var serl = firebase.database().ref('locations/' + result + '/services/' + lsss);//.child('locations/'+result+'/services/'+lsss);
    console.log(serl);
    serl.on('value', snap => {
        console.log(snap.val());
        sl = snap.val();
        console.log(sl);
        k = Object.keys(sl);
        console.log(k);
        for (i = 0; i < keys.length; i++) {
            m = k[i];
            $("#listserv").append('<tr><td class="btn" id="sll" value="' + m + '" onclick= "lf(\'' + m + '\')">' + m + '<td></tr>');
        }
    });
}

function lf(f) {
    var fl = f;
    var fls = firebase.database().ref().child('locations/' + result + '/services/' + lsss + '/' + fl);
    console.log(fls);
    fls.on('value', snap => {
        console.log(snap.val());
        fm = snap.val();
        for (i = 0; i < fm.length; i++) {
            m = fm[i];
            $("#listfood").append('<tr><td class="btn" id="sll" value="' + m + '" onclick= "lf(\'' + m + '\')">' + m + '<td></tr>');
        }
    });
}