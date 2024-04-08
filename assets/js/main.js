/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Function to set dark mode
const setDarkMode = () => {
    document.body.classList.add(darkTheme)
    themeButton.classList.remove(iconTheme)
    localStorage.setItem('selected-theme', 'dark')
    localStorage.setItem('selected-icon', 'ri-moon-line')
    document.querySelector('.profile__perfil img').src = "assets/img/pic_dark.png";
}

// Function to set light mode
const setLightMode = () => {
    document.body.classList.remove(darkTheme)
    themeButton.classList.add(iconTheme)
    localStorage.setItem('selected-theme', 'light')
    localStorage.setItem('selected-icon', 'ri-sun-line')
    document.querySelector('.profile__perfil img').src = "assets/img/pic_light.png";
}

// Set default to dark mode
setDarkMode();

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Toggle between dark and light mode
    if (document.body.classList.contains(darkTheme)) {
        setLightMode();
    } else {
        setDarkMode();
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 500})
sr.reveal(`.profile__profession`, {delay: 600})
sr.reveal(`.profile__social`, {delay: 700})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 700})
sr.reveal(`.profile__buttons`, {delay: 800})
sr.reveal(`.filters__content`, {delay: 900})
sr.reveal(`.filters`, {delay: 1000})
