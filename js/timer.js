var countDownDate = new Date("02/09/2021").getTime();

countDownUpdate = function() {
    var distance = countDownDate - new Date().getTime();

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((distance % (1000 * 60)) / 1000);

    var days1 = document.getElementsByClassName("days-1");
    for (let d in days1) {
      days1[d].innerHTML = Math.floor(days / 10);
    }

    var days2 = document.getElementsByClassName("days-2")
    for (let d in days2) {
      days2[d].innerHTML = days % 10;
    }

    var hours1 = document.getElementsByClassName("hours-1");
    for (let h in hours1) {
      hours1[h].innerHTML = Math.floor(hours / 10);
    }

    var hours2 = document.getElementsByClassName("hours-2")
    for (let h in hours2) {
      hours2[h].innerHTML = hours % 10;
    }

    var min1 = document.getElementsByClassName("min-1");
    for (let m in min1) {
      min1[m].innerHTML = Math.floor(min / 10);
    }

    var min2 = document.getElementsByClassName("min-2")
    for (let m in min2) {
      min2[m].innerHTML = min % 10;
    }

    var sec1 = document.getElementsByClassName("sec-1");
    for (let s in sec1) {
      sec1[s].innerHTML = Math.floor(sec / 10);
    }

    var sec2 = document.getElementsByClassName("sec-2")
    for (let s in sec2) {
      sec2[s].innerHTML = sec % 10;
    }
}

countDownUpdate()
setInterval(countDownUpdate, 1000)
