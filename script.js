function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDay();

    // Update time display
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // Highlight the current day of the week
    const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    daysOfWeek.forEach((dayId, index) => {
        const dayElement = document.getElementById(dayId);
        dayElement.classList.remove('active');
        if (index === day) {
            dayElement.classList.add('active');
        }
    });
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// Theme toggle functionality
const themeToggleButton = document.getElementById('theme-toggle');
let isDarkMode = false;

themeToggleButton.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        document.querySelector('.clock-container').classList.remove('dark-mode');
        document.querySelector('.clock-container').classList.add('light-mode');
        document.querySelector('.time').classList.remove('dark-mode');
        document.querySelector('.time').classList.add('light-mode');
        document.querySelectorAll('.day').forEach(day => {
            day.classList.remove('dark-mode');
            day.classList.add('light-mode');
        });
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        document.querySelector('.clock-container').classList.remove('light-mode');
        document.querySelector('.clock-container').classList.add('dark-mode');
        document.querySelector('.time').classList.remove('light-mode');
        document.querySelector('.time').classList.add('dark-mode');
        document.querySelectorAll('.day').forEach(day => {
            day.classList.remove('light-mode');
            day.classList.add('dark-mode');
        });
    }
    isDarkMode = !isDarkMode;
});
