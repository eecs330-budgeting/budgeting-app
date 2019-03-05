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

function submit(){
    var list = $("input[name='purchaseType']:checked").map(function () {
        return this.value;
    }).get();
    let cate = list
    let memo = $( '#memo' ).val()
    let cost = $( '#cost' ).val()
    if( typeof memo !== 'undefined' ) {
        $( 'ul.purchase-each' ).append( '<li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-shopping-cart"></i></span><div class="purchase-title"><span>'+cate.toString()+'</span><span> $ '+cost+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li>' )
    }
    $('#addModal').modal('hide');
}





