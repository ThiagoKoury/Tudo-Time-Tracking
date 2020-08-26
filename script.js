var lista = document.getElementsByTagName("li");
var i;
var hh = 0;
var mm = 0;
var ss = 0;
var cron;

function timer() {
  ss++;

  if (ss == 59) { 
      ss = 0; 
      mm++; 

      if (mm == 59) { 
          mm = 0;
          hh++;
      }
  }

  
  var formato = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  
  
  document.getElementsById("tempo").innerText = formato;

 
  return formato;
}


for (i = 0; i < lista.length; i++) {
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "excluir";
  span.appendChild(txt);
  lista[i].appendChild(span);
}

var excluir = document.getElementsByClassName("excluir");
var i;
for (i = 0; i < excluir.length; i++) {
  excluir[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}





function reinicia() {
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

  document.getElementById('counter').innerText = '00:00:00';
}

function newElement() {
  var li = document.createElement("li");
  li.className = "elemento";
  var varlorInput = document.getElementById("input").value;
  var t = document.createTextNode(varlorInput);
  li.appendChild(t);
  if (varlorInput === '') {
    alert("Digite um nome para a tarefa");
  } else {
    document.getElementById("tarefas").appendChild(li);
  }
  document.getElementById("input").value = "";



  var tempo = document.createElement("SPAN");
  var txtTempo = document.createTextNode("00:00:00");
  tempo.id = "tempo";
  tempo.appendChild(txtTempo);
  li.appendChild(tempo);
  
  var spanContinua = document.createElement("SPAN");
  var txtContinua = document.createTextNode(">");
  spanContinua.className = "continua";
  spanContinua.appendChild(txtContinua);
  li.appendChild(spanContinua);
  
  spanContinua.onclick = function(){
    this.style.display = "none";
    this.nextSibling.style.display = "inline";
  };


  var spanPausa = document.createElement("SPAN");
  var txtPausa = document.createTextNode("||");
  spanPausa.className = "pausa";
  spanContinua.style.display = "none";
  spanPausa.appendChild(txtPausa);
  li.appendChild(spanPausa);

  spanPausa.onclick = function(){
    clearInterval(cron);
    this.style.display = "none";
    this.previousSibling.style.display = "inline";
  };



  var spanFim = document.createElement("SPAN");
  var txtFim = document.createTextNode("v");
  spanFim.className = "fim";
  spanFim.appendChild(txtFim);
  li.appendChild(spanFim);
  
  spanFim.onclick = function(){
    clearInterval(cron);
    this.parentElement.style.backgroundColor = "lightgreen";
    this.style.display = "none";
    this.previousSibling.style.display = "none";
    this.nextSibling.style.display = "inline";
  };


  var spanRe = document.createElement("SPAN");
  var txtRe = document.createTextNode("<");
  spanRe.className = "re";
  spanRe.style.display = "none";
  spanRe.appendChild(txtRe);
  li.appendChild(spanRe);

  spanRe.onclick = function(){
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    setInterval(timer, 1000);
    
  };


  var spanExclui = document.createElement("SPAN");
  var txtExclui = document.createTextNode("\u00D7");
  spanExclui.className = "excluir";
  spanExclui.appendChild(txtExclui);
  li.appendChild(spanExclui);

  for (i = 0; i < excluir.length; i++) {
    excluir[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}