class CountdownTimer {

    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timerRef = document.querySelector(this.selector);
        this.days = this.timerRef.querySelector('span[data-value="days"]');
        this.hours = this.timerRef.querySelector('span[data-value="hours"]');
        this.minutes = this.timerRef.querySelector('span[data-value="mins"]');
        this.seconds = this.timerRef.querySelector('span[data-value="secs"]');
        this.countTime();
    }

    countTime() {
        setInterval(() => {
            const currentTime = new Date().getTime();
            const remainsTime = this.targetDate - currentTime;

            const days = this.pad(Math.floor(remainsTime / (1000 * 60 * 60 * 24)));
            const hours = this.pad(Math.floor((remainsTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = this.pad(Math.floor((remainsTime % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = this.pad(Math.floor((remainsTime % (1000 * 60)) / 1000));

            this.days.textContent = days;
            this.hours.textContent = hours;
            this.minutes.textContent = minutes;
            this.seconds.textContent = seconds;
        }, 1000);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
};



const countdownToNewYear = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021'),
});


const countdownToChristmas = new CountdownTimer({
    selector: '#timer-2',
    targetDate: new Date('Mar 25, 2021'),
});