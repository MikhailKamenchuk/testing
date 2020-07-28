export const timer = {
    secondsPassed: 0,
    minsPassed: 0,
    startTimer() {
        setInterval(() => {
            ++this.secondsPassed;
            if (this.secondsPassed === 60) {
                ++this.minsPassed;
                this.secondsPassed = 0;
       
            }
        //   console.log(`${this.minsPassed}:${String(this.secondsPassed).padStart(2, '0')}`)
        }, 1000);
    },
    getTime() {
        return `${this.minsPassed}:${this.secondsPassed}`
    }
};