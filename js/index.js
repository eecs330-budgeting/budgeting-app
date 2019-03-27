var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var mS = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec"
    ];
function submit(){
    let list = $("input[name='purchaseType']:checked").map(function () {
        return this.value;
    }).get();
    let cate = list
    let memo = $( '#memo' ).val()
    let cost = $( '#cost' ).val()

    if(cate.length == 0){
        alert("Please enter all fields correctly!");
        return;
    }
    if(!Number(cost)){
        alert("Cost should be number only, reenter your cost!");
        return
    }
    $( 'ul.purchase-each' ).append( '<li class="card-purchases"><div class="purchases-header"><h3><div class="purchase-content"><span class="icon"><i class="fas fa-shopping-cart"></i></span><div class="purchase-title"><span>'+cate.toString()+'</span><span> $ '+cost+'</span></div></div><span><a href="#" class="btn" data-toggle="modal" data-target="#editModal"><i class="far fa-edit"></i></a></span></h3></div></li>' )
   
    $('#addModal').modal('hide');
}

function edit(){
    let list = $("input[name='editpurchaseType']:checked").map(function () {
        return this.value;
    }).get();
    let cate = list;
    let memo = $( '#editmemo' ).val();
    let cost = $( '#editcost' ).val();
    let date = $( '#editdate').val();
    if(cate.length == 0){
        alert("Please enter all fields correctly!");
        return;
    }
    if(!Number(cost)){
        alert("Cost should be number only, reenter your cost!");
        return
    }
    $( '#pur-cates' ).text(cate.toString());
    $( '#pur-cost' ).text("$ " + cost);
    $('#editModal').modal('hide');
}

function closeHint(){
    document.getElementById("first-warning").style.display = 'none';
}