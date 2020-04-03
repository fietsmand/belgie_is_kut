
export const getText = (language: 'NL' | 'FR', text: string) => {
    if (language === 'NL') {
        return text;
    }
    
    return text.replace(/[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ]/g, '💩');
}