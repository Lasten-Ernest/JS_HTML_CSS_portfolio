let my_themes = document.getElementsByClassName('theme_dots');

let theme_name = localStorage.getItem('theme_name');

if (theme_name == null){
    setTheme('light')
}
else {
    setTheme(theme_name)
}

for (var i = 0; my_themes.length > i; i++) {
    my_themes[i].addEventListener('click', function(){
        let theme_mode = this.dataset.theme_mode
        setTheme(theme_mode)
    })
}

function setTheme(theme_mode) {
    if (theme_mode == 'light'){
        document.getElementById('theme_style').href = 'style.css'
    }
    if (theme_mode == 'blue'){
        document.getElementById('theme_style').href = 'blue.css'
    }
    if (theme_mode == 'green'){
        document.getElementById('theme_style').href = 'green.css'
    }
    if (theme_mode == 'purple'){
        document.getElementById('theme_style').href = 'purple.css'
    }
    localStorage.setItem('theme_name', theme_mode)
   
}