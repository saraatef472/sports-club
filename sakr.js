$("#div4").delay(5000).fadeIn();
$("#cancel").click(function() {
    $("#div4").fadeOut()
})

function yalahwy() {

    var x = document.getElementById("first").value;
    var y = ["123456", "78909", "1123467", "2375124", "11231", "0111234", "765234", "76543"];

    alert("Hellow " + x + " you are  accepted your new id is ( " + y[Math.floor(Math.random() * y.length)] + ")   we send in email ,if you didn't to save it call us on 16512");
}