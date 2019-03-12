var test = 4;
function activate(cur) {
    var cur_act = cur;


    if (document.getElementById(cur + 'a').classList.contains("activated")) {

    } else if (document.getElementById(cur + 'a').classList.contains("deactivated")) {

        var i;
        for (i = 1; i < test; i++) {
            document.getElementById("button" + i + "a").classList.replace("activated", "deactivated");
            document.getElementById("button" + i + "b").classList.replace("block-activated", "block-deactivated");


        }

        document.getElementById(cur + 'a').classList.replace("deactivated", "activated");
        document.getElementById(cur + 'b').classList.replace("block-deactivated", "block-activated")

    }
}

function submit(){
    // var list = $("input[name='purchaseType']:checked").map(function () {
    //     return this.value;
    // }).get();
    // let cate = list
    let memo = $( '#memo' ).val();
    let period = $( '#period' ).val();
    var per;
    var d;
    // var total = document.getElementById("ta").innerText;
    if (period == 1)
    {
        per = '7 Days';
        d = "7";
    }
    if (period == 2)
    {
        per = '14 Days';
        d = "14";

    }
    if (period == 3)
    {
        per = '30 Days';
        d = "30";
    }

    if( typeof per == 'undefined' ) {
        alert("Please select period!");
        return;
    }
    else if (memo == '' ){
        alert("Please enter nickname!");
        return;
    }


    else {
        var it1 = $( '#it1' ).val();
        var it2 = $( '#it2' ).val();
        var it3 = $( '#it3' ).val();
        var it4 = $( '#it4' ).val();
        var it5 = $( '#it5' ).val();


        var i;




        i = Number(it1) + Number(it2) + Number(it3) + Number(it4) + Number(it5);







        $( 'ul.bank-list1' ).append( '<li><button type="button"  id="button'+test.toString()+'" class=" btn btn-block budget-list-btn"  onclick="activate (this.id)"><h4><span>'+memo.toString()+'</span><span id="button'+test.toString()+'a" class="active deactivated"><span><i class="fa fa-check-square " aria-hidden="true"></i></span> Activated</span></h4><h6><span class="nickname left">Period:'+per+'</span></h6></button></li>' )
        $( 'div.add-new' ).append('<div class="budget-card-view block-deactivated" id="button'+test.toString()+'b"><header class="card-header transparent">'+memo.toString()+'</header><div class="card-content budget-block"><div class="budget-left-text"><span >Budget Exceeded</span><button type="button" class="btn btn-lg budget-btn right " data-toggle="tooltip" data-placement="top" title="We are working on it" data-toggle="modal" data-target="#editModal">Edit Budget</button></div><div class="budget-left-number"><span >$0.00</span></div><ul><li class="card-balance"><ul class="bank-list"><div class="row"><div class="col-md-4"><div class="budget-left-second-text"><span >Total Spending</span></div><div class="budget-left-second-number"><span >$0.00</span></div></div><div class="col-md-4"><div class="budget-left-second-text"><span >Budget Amount</span></div><div class="budget-left-second-number"><span >$ '+i+'</span></div></div><div class="col-md-4"><div class="budget-left-second-text"><span >Days Left</span></div><div class="budget-left-second-number"><span >'+d+'</span></div></div></div></ul></li><div class="card-content">Budget by Categories</div></ul><ul><li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-utensils"></i></span><div class="purchase-title"><span>Food</span><span>$ '+it1+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li><li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-home"></i></span><div class="purchase-title"><span>Rent</span><span>$ '+it2+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li><li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-shopping-cart"></i></span><div class="purchase-title"><span>Online Shopping</span><span>$ '+it3+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li><li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-glass-cheers"></i></span><div class="purchase-title"><span>Entertainment</span><span>$ '+it4+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li><li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-question-circle"></i></span><div class="purchase-title"><span>Others</span><span>$ '+it5+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li></ul></div></div>')
        test = test + 1;
    }
    $('#addModal').modal('hide');
}


function edit(){

    let memoe = $( '#memoe' ).val()
    let periode = $( '#periode' ).val()
    var per;
    var d;
    if (periode == 1)
    {
        per = '7 Days';
        d = "7";
    }
    if (periode == 2)
    {
        per = '14 Days';
        d = "14";

    }
    if (periode == 3)
    {
        per = '30 Days';
        d = "30";
    }

    if( typeof per == 'undefined' ) {
        alert("Please select period!");
        return;
    }
    else if (memoe == '' ){
        alert("Please enter nickname!");
        return;
    }
    $( '#s3' ).text(memoe.toString());
    $( '#s3c' ).text(per);
    $('#editModal').modal('hide');
}




