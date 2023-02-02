function validation()
{

  if(document.frm.em.value=="")
  {

    // alert('Please enter your email Address')
    document.getElementById("error").innerHTML='Please enter your email address';
    document.frm.em.focus();
    return false;

  }



}