// https://solaria.neocities.org/guides/themeswitch
// Brave browser dev tool -> Application -> Storage to check local browser storage
// if webpage is inside subfolder, that folder also needs to contain copies of the color theme stylesheet var definition files
// https://stackoverflow.com/questions/38896151/accessing-file-with-js-when-files-are-a-folder-deeper-than-domain

// set initial value for prefix and default theme
let prefix = '';
let defaulttheme = 'style-purple.css';
// console.log("test");
// console.log(subpage);
// console.log(prefix);

// body script in root directory pages
function setmainpage() {
prefix = '';
checksavedtheme()
}

// body script in sub directory pages
function setsubpage() {
prefix = '../';
checksavedtheme()
}

// check for saved theme in local browser storage, if none, use default
function checksavedtheme() {
if (localStorage.getItem('theme') === null) {
console.log("no theme saved");
let stylecolorcss = defaulttheme;
colorchange(stylecolorcss);
} else {
console.log("theme saved");
let stylecolorcss = localStorage.getItem('theme');
colorchange(stylecolorcss)
}
}

// change color theme css link
function colorchange(stylecolorcss) {
savecolorchange(stylecolorcss);
stylecolorcss = prefix + stylecolorcss;
console.log("applying color theme:");
console.log(stylecolorcss);
// document.getElementById('testprint').innerHTML = stylecolorcss;
document.getElementById('colortheme').setAttribute('href', stylecolorcss);
}

// save chosen theme to local browser storage
function savecolorchange(stylecolorcss) {
localStorage.setItem('theme', stylecolorcss);
console.log("saved color theme:");
console.log(stylecolorcss);
}

// function for link click to change color scheme
function clicktocolorchange(stylecolorcss) {
event.preventDefault();
colorchange(stylecolorcss);
}