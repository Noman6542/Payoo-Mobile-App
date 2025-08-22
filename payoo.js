document.getElementById('btnLogin').addEventListener('click',function(event){
  event.preventDefault()
  const mobileNumber = 1577036525 ;
  const pinNumber = 1234 ;

  const mobileNumberValue = document.getElementById('number-ph').value ;
  
  const mobileNumberValueConverted = parseInt(mobileNumberValue);


  const pinNumberValue = document.getElementById('pin-num').value ;
  const pinNumberValueConverted = parseInt(pinNumberValue)
  console.log(mobileNumberValueConverted,pinNumberValueConverted);
  
  if(mobileNumberValueConverted===mobileNumber && 
  pinNumberValueConverted===pinNumber){
    window.location.href="./home.html"
  }else{
    alert('haha! bruh hoy nai')
    
  }
  
  
})
