

function ValidData(e,spn)
{
    if(e.value=="")
    {
       document.getElementById(spn).innerHTML = "Please Enter Data!";
       document.getElementById(spn).style.color='red';
    }
    else{
        document.getElementById(spn).innerHTML = "";
    }
}
function namevalid(e,spnid)
{
   var name = /^[a-zA-z]+$/;
   if(name.test(e.value))
   {
    document.getElementById(spnid).innerHTML = "";
   }
   else{
    document.getElementById(spnid).innerHTML = "Please Enter only characters!";
    document.getElementById(spnid).style.color='red';
   }
}
function Emailvalid(e,spnid)
{
    var email = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if(email.test(e.value))
    {
        document.getElementById(spnid).innerHTML = "";
    }
    else{
        document.getElementById(spnid).innerHTML = "Please Enter Valid Email!";
        document.getElementById(spnid).style.color='red';
    }
}


function demo(e,spnid)
{
    var p = /^[a-zA-Z0-9._-]{3,5}$/;
    if(p.test(e.value))
    {
        document.getElementById(spnid).innerHTML = "";
    }
    else{
        document.getElementById(spnid).innerHTML = "Please Enter min 3 & max 5 characters!";
        document.getElementById(spnid).style.color='red';
    }
}

