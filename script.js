var lista = document.getElementsByTagName("li");
var i;
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
  }
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
  
  
  var spanPausa = document.createElement("SPAN");
  var txtPausa = document.createTextNode("||");
  spanPausa.className = "pausa";
  spanPausa.appendChild(txtPausa);
  li.appendChild(spanPausa);

  var spanFim = document.createElement("SPAN");
  var txtFim = document.createTextNode("v");
  spanFim.className = "fim";
  spanFim.appendChild(txtFim);
  li.appendChild(spanFim);

  var spanExclui = document.createElement("SPAN");
  var txtExclui = document.createTextNode("\u00D7");
  spanExclui.className = "excluir";
  spanExclui.appendChild(txtExclui);
  li.appendChild(spanExclui);

  for (i = 0; i < excluir.length; i++) {
    excluir[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}