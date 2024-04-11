const themes = {
    light: {
        '--primaryColor': 'white',
        '--secondaryColor': 'black'
    },
    dark: {
        '--primaryColor': 'black',
        '--secondaryColor': 'white'
    }
}
var themeIndex = 0;
document.getElementById('change').addEventListener('click',function(){
	themeIndex++;
	var themeCount = Object.keys(themes).length;
    themeIndex = themeIndex <= themeCount-1 ? themeIndex : 0;
    var theme = themes[Object.keys(themes)[themeIndex]];
    activateTheme(theme);
});

function activateTheme(theme){
    for (let prop in theme){
        document.querySelector(':root').style.setProperty(prop, theme[prop]);
    }
}
