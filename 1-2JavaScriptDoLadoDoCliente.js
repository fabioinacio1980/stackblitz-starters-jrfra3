<html>
<head>
<script src="library.js"></script> <!-- inclui uma biblioteca de código JavaScript -->
</head>
<body>
<p>This is a paragraph of HTML</p>
<script>
// E este é um código JavaScript do lado do cliente
// literalmente incorporado no arquivo HTML
</script>
<p>Here is more HTML.</p>
</body>
</html>

<script>
function moveon() {
// Exibe uma caixa de diálogo modal para fazer uma pergunta ao usuário
var answer = confirm("Ready to move on?");
// Se ele clicou no botão "OK", faz o navegador carregar uma nova página
if (answer) window.location = "http://google.com";
}
// Executa a função definida acima por 1 minuto (60.000 milissegundos) a partir de agora.
setTimeout(moveon, 60000);
</script>

// Exibe uma mensagem em uma seção de saída de depuração especial do documento.
// Se o documento não contém esta seção, cria uma.
function debug(msg) {
    // Localiza a seção de depuração do documento, examinando os atributos de
    // identificação HTML
    var log = document.getElementById("debuglog");
    // Se não existe elemento algum com a identificação "debuglog", cria um.
if (!log) {
    log = document.createElement("div"); // Cria um novo elemento <div>
    log.id = "debuglog"; // Define o atributo de identificação HTML
    // nele
    log.innerHTML = "<h1>Debug Log</h1>"; // Define o conteúdo inicial
    document.body.appendChild(log); // Adiciona-o no final do documento
    }
    // Agora, coloca a mensagem em seu próprio <pre> e a anexa no log
    var pre = document.createElement("pre"); // Cria uma marca <pre>
    var text = document.createTextNode(msg); // Coloca a msg em um nó de texto
    pre.appendChild(text); // Adiciona o texto no <pre>
    log.appendChild(pre); // Adiciona <pre> no log
    }

    function hide(e, reflow) { // Oculta o elemento e faz script de seu estilo
        if (reflow) { // Se o 2º argumento é verdadeiro
        e.style.display = "none" // oculta o elemento e utiliza seu espaço
        }
        else { // Caso contrário
        e.style.visibility = "hidden"; // torna e invisível, mas deixa seu espaço
        }
        }
        function highlight(e) { // Destaca e, definindo uma classe CSS
        // Basta definir ou anexar no atributo da classe HTML.
        // Isso presume que uma folha de estilos CSS já define a classe "hilite"
        if (!e.className) e.className = "hilite";
        else e.className += " hilite";
        }

<script src="debug.js"></script>
<script src="hide.js"></script>
Hello
<button onclick="hide(this,true); debug('hide button 1');">Hide1</button>
<button onclick="hide(this); debug('hide button 2');">Hide2</button>
World

// O evento "load" ocorre quando um documento está totalmente carregado. Normalmente,
// precisamos esperar por esse evento antes de começarmos a executar nosso código
// JavaScript.
window.onload = function() { // Executa esta função quando o documento for carregado
    // Localiza todas as marcas <img> no documento
    var images = document.getElementsByTagName("img");
    // Faz um laço por elas, adicionando uma rotina de tratamento para eventos "click" em
    // cada uma para que clicar na imagem a oculte.
    for(var i = 0; i < images.length; i++) {
    var image = images[i];
    if ( image.addEventListener) // Outro modo de registrar uma rotina de
    // tratamento
    image.addEventListener("click", hide, false);
    else // Para compatibilidade com o IE8 e anteriores
    image.attachEvent("onclick", hide);
    }
    // Esta é a função de rotina para tratamento de evento registrada anteriormente
    function hide(event) { event.target.style.visibility = "hidden"; }
    };

    function debug(msg) {
        var log = $("#debuglog"); // Localiza o elemento para exibir a msg.
        if (log.length == 0) { // Se ele ainda não existe, cria-o...
        log = $("<div id='debuglog'><h1>Debug Log</h1></div>");
        log.appendTo(document.body); // e o insere no final do corpo.
        }
        log.append($("<pre/>").text(msg)); // Coloca a msg em <pre> e anexa no log.
        }

