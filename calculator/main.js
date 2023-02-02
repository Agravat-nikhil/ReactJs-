function display(val)
{
    //alert('hi');
    document.getElementById("result").value+=val;
}
// clear 
function clr()
{
    document.getElementById("result").value="";

}

function finalresult()
{
    let a=document.getElementById("result").value;
    let b=eval(a);
    document.getElementById("result").value=b;
}

function runBack(){
    var val = document.getElementById("btn2").value.slice(0, -1);
    document.case.display.value = val;
};