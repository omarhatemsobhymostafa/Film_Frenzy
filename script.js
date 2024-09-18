let counter = 0
let ivertal = setInterval(function(){
  counter++
  if(counter == 100){
    clearInterval(ivertal)

    
    document.getElementById("loader").style.visibility='hidden'
  
  }
  document.getElementById("loader-counter").innerHTML = `${counter}%`
  
  
},40.97)