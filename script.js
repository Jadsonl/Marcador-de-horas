   function carregar(){
    var msg= window.document.querySelector("#msg");
    var img= window.document.querySelector("#imagem")
    var date= new Date() 
    var hora= date.getHours()  
    var minuto = date.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if(minuto < 10){
      minuto= "0"+minuto
    }
    if (hora >= 5 && hora < 12)
 {
   //bom dia
   img.setAttribute('src', 'imagens/fotomanha.png');
   document.body.style.background='#e2cd9f'

 }else if(hora >= 12 && hora < 18){
  // boa tarde
  img.setAttribute('src', 'imagens/fototarde.png');
  document.body.style.background='#ee8528'
 
 }else {
   //boa noite
   img.setAttribute('src', 'imagens/fotonoite.png');
   document.body.style.background='#8b6ba0'
 }
 }