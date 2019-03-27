function updateProfile(){
    let uname = $('#edituname').val();
    let bday = $( '#editdate' ).val();
    let address = $( '#editaddress' ).val();
    let loc = $('#editlocation').val();
    let phone = $('#editphone').val();
    
    $('span.uname').text(uname);
    $( '#bday' ).text(bday);
    $( '#address' ).text(address);
    $('#loc').text(loc);
    $('#phone').text(phone);
    $('#editprofileModal').modal('hide');
}
function addACard(){
    let banknameid = $( '#BankName' ).val();
    let appendContent = '';
    let bankname;
    let accountName = $('#account').val();
    let password = $('#password').val();
    if(accountName =='' || password == ''){
        alert("Please enter your account name or password correctly!");
    }
    console.log(banknameid)
    if (banknameid == '1'){
        bankname = 'boa';
        accountName = 'BOA CASH REWARDS';
    }else if (banknameid == '2'){
        bankname = 'chase';
        accountName = 'CHASE COLLEGE';
    }else if (banknameid == '3'){
        bankname = 'discover';
        accountName = 'DISCOVER';
    }else{
        alert("please select one bank!");
        return;
    }
    appendContent = '<div class="card-wrapper" id="newcard"><div class="card budget-card border-0 "><div class="card-body"><img class="card-logo" src="./images/'+ bankname +'.png"/><div class="card-text budget-card-text"><p>'+ accountName +'(...xxxx)</p><p>$ ****</p></div><a class="card-link add-another-ba" data-toggle="collapse" href="#newactions"><i class="fas fa-caret-down dropdownicon"></i>Manage This Card</a><div class="collapse action-collapse" id="newactions"><a class="Cardaction btn" data-toggle="collapse" href="#"><i class="far fa-eye"></i></a><button class="Cardaction btn" data-toggle="collapse" onclick="remove(' + "newcard" +')"><i class="far fa-trash-alt"></i></button></div></div></div></div>'
    $('#cards-list').append(appendContent);
    $('#addCardModal').modal('hide');
    $( '#BankName' ).val("");
    $('#account').val("");
    $('#password').val("");
    appendContent=''
}

window.remove = function(id){
    if (typeof id ==  "object" ) id = id.id
    document.getElementById(id).style.display = 'none';
}

function save(){
    name = $( '#CardName' ).val();
    status = $('#CardStatus').val();
    $( '#CardName' ).val(name);
    $('#CardStatus').val(status);
    $('#viewCardModal').modal('hide');
}