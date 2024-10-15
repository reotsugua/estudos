function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
    // document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    const rua = document.getElementById('rua');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const complemento = document.getElementById('complemento');

    if (!("erro" in conteudo)) {
        
        //Atualiza os campos com os valores.
        rua.value = (conteudo.logradouro);
        bairro.value = (conteudo.bairro);
        cidade.value = (conteudo.localidade);
        uf.value = (conteudo.uf);
        // document.getElementById('ibge').value = (conteudo.ibge);
        complemento.disabled = false;
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function pesquisacep(valor) {
    console.log('comecou')
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    const rua = document.getElementById('rua');
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {
            console.log('preenchendo')
            //Preenche os campos com "..." enquanto consulta webservice.
            rua.value = "...";
            bairro.value = "...";
            cidade.value = "...";
            uf.value = "...";
            // document.getElementById('ibge').value="...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        console.log('vai limpar o fomr')
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};







const modalElement = document.getElementById('exampleModal');
const initialModalContent = modalElement.innerHTML;

// Função para resetar o conteúdo do modal
function resetModal() {
    console.log('resetou o modal');
    modalElement.innerHTML = initialModalContent;
}

// Evento quando o modal é fechado
modalElement.addEventListener('hidden.bs.modal', resetModal);
modalElement.addEventListener('show.bs.modal', () => {
    document.getElementById('btn-search-cep').addEventListener('click', () => pesquisacep(document.getElementById('input-cep').value));
});


