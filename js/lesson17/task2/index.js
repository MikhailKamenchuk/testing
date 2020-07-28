export const callbackPrompt = {
    message: 'How are you?',
    showPrompt(){
        const question = prompt(this.message);
        return question
    },
    showDeferredPrompt(ms){
        return setTimeout(() => this.showPrompt(), ms)
    }
}