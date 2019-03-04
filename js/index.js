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

function edit(){
    
}