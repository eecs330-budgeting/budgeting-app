function activate(cur) {
    var cur_act = cur;


    if (document.getElementById(cur + 'a').classList.contains("activated")) {

    } else if (document.getElementById(cur + 'a').classList.contains("deactivated")) {

        var i;
        for (i = 1; i < 4; i++) {
            document.getElementById("button" + i + "a").classList.replace("activated", "deactivated");
            document.getElementById("button" + i + "b").classList.replace("block-activated", "block-deactivated");


        }

        document.getElementById(cur + 'a').classList.replace("deactivated", "activated");
        document.getElementById(cur + 'b').classList.replace("block-deactivated", "block-activated")

    }
}





