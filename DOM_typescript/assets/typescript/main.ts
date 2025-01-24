/* VARIÁVEIS GLOBAIS -  Para armazenar variáveis que serão usadas em todo o script. */


/* CAPTURA DE ELEMENTOS do DOM — Onde são capturados e armazenados elementos do DOM para manipulação. */
const formSearchLocation = document.getElementById('form-search-city');


/* FUNÇÕES UTILITÁRIAS — Funções auxiliares, como abrir modais, formatar dados, etc. */
function buttonLoading(buttonElement: HTMLButtonElement, isLoading: boolean = true) {

    if (isLoading) {
        (!buttonElement.dataset.originalText) && (buttonElement.dataset.originalText = buttonElement.textContent ?? "");
        
        buttonElement.disabled = true;
        buttonElement.textContent = "Carregando...";
    } else {
        // Restaura o estado original do botão
        buttonElement.textContent = buttonElement.dataset.originalText ?? '';
        buttonElement.disabled = false;
    }
}

async function getDataWeather(location:string){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=32e2a648347c3fe47931c079daaac006&units=metric&lang=pt_br`);

    if (!res.ok) throw new Error ("Erro ao buscar dados do clima!")

    const {name, weather: [weather], main} = await res.json();
    return {name, weather, main};
}


/* FUNÇÕES DE PRINCIPAIS  — Funções que tratam da lógica principal (como manipulação de assinantes). */
const handleSearchLocationSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    
    const form: HTMLFormElement = e.target as HTMLFormElement;
    const buttonSubmitter: HTMLButtonElement = e.submitter as HTMLButtonElement;
    const input: HTMLInputElement = form?.elements[0] as HTMLInputElement;

    if (!buttonSubmitter || !input) return;

    buttonLoading(buttonSubmitter);


    try {
        const dataWeather = await getDataWeather(input.value);
        console.log(dataWeather);
        
        
    } catch (error) {
        
    } finally {
        buttonLoading(buttonSubmitter, false);
    }
    
}


/* EVENTOS — Manipuladores de eventos DOM, como cliques e submits. */
formSearchLocation?.addEventListener('submit', handleSearchLocationSubmit)

/* MAIN — funções que precisam ser carregadas ao carregar o HTML. */
