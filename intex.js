function handleclick() {
   if( document.getElementById('head').innerHTML == "button clicked"){
    document.getElementById('head').innerHTML = "button not yet clicked"
   }else{
    document.getElementById('head').innerHTML = "button clicked"
   }
}