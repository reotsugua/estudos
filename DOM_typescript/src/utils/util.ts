export function buttonLoading(buttonElement: HTMLButtonElement, isLoading: boolean = true) {
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

