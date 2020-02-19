// dobrando o texto do textarea para funcionar no window.print()
let text = document.getElementById("targettext");

text.addEventListener("keyup", function(){
    let doubletext = document.getElementById("double");
    doubletext.innerHTML = (text).value;
});

// gerando o pdf
let buttonEnv = document.getElementById("mybtn");
buttonEnv.addEventListener("click", pdfPrint)
function pdfPrint(){
    window.print();
};

// mascara de cpf e cnpj
let campoTexto = document.getElementById("cpf").value

function formatarCampo(campoTexto) {
    if (campoTexto.value.length <= 11) {
        campoTexto.value = mascaraCpf(campoTexto.value);
    } else {
        campoTexto.value = mascaraCnpj(campoTexto.value);
    }
}
function retirarFormatacao(campoTexto) {
    campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g,"");
}
function mascaraCpf(valor) {
    return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}
function mascaraCnpj(valor) {
    return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
}
