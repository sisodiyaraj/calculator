
function insert(n) {
    document.form.textview.value = document.form.textview.value+n
}
function equal(){
   var exp = document.form.textview.value;
   if(exp)
     document.form.textview.value = eval(document.form.textview.value);
 }
 function clean(){
    document.form.textview.value="";
 }