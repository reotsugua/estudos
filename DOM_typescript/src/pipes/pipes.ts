export function capitalize(text:string): string {
    if (!text) return " ";
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
}

export function roundToTwoDecimals(value: number): number {
    return Math.floor(value);
}