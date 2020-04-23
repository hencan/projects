// Variáveis do Sistema
var openMenu = 0
var openHistCalc = 0
var openPreview = 0
var openAbout = 0
var openHelp = 0
var openShare = 0
// Pre-sets da visão mobile
document.querySelector("#openCloseHist").style.height = (window.innerHeight - 100) + "px"
document.querySelector("#openCloseCalc").style.height = (window.innerHeight - 100) + "px"
// Funções básicas da navegação
function openCloseMenuToggle() {
    if (openMenu == 1) {
        document.querySelector(".sidebarMenu").style.right = -60 + "px"
        document.querySelector(".menu-background").style.right = -10000 + "px"
        openMenu = 0
    } else {
        document.querySelector(".sidebarMenu").style.right = 0
        document.querySelector(".menu-background").style.right = 0
        openMenu = 1
    }
}
function openClosePreview() {
if (openPreview == 1) {
    document.querySelector(".imagePreview-bg").style.right = -10000 + "px"
    openPreview = 0
} else {
    document.querySelector(".imagePreview-bg").style.right = 0
    openPreview = 1
}
}
function openCloseAbout() {
    if (openAbout == 1) {
        document.querySelector(".about-background").style.right = -10000 + "px"
        openAbout = 0
    } else {
        document.querySelector(".about-background").style.right = 0
        openAbout = 1
    }
}
function openCloseHelp() {
    if (openHelp == 1) {
        document.querySelector(".help-background").style.right = -10000 + "px"
        openHelp = 0
    } else {
        document.querySelector(".help-background").style.right = 0
        openHelp = 1
    }
}
function openCloseShare() {
    if (openShare == 1) {
        document.querySelector(".share-background").style.right = -10000 + "px"
        openShare = 0
    } else {
        document.querySelector(".share-background").style.right = 0
        openShare = 1
    }
}
// Função de compartilhamento (em teste)
function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'ComentCalc',
			text: 'Calculadora com histórico comentável!',
			url: 'https://hencan.github.io/projects/calcRecibos/index.html',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	} else {
        document.querySelector(".share-background").style.right = 0
        openShare = 1
    }
}
// Função da Calculadora/Historico
function openCloseHistCalc() {
    if (openHistCalc == 1) {
        document.querySelector("#historic").style.display = "none"
        document.querySelector("#calculator").style.display = "block"
        document.querySelector("#openCloseHist").style.display = "block"
        document.querySelector("#openCloseCalc").style.display = "none"
        openHistCalc = 0
    } else {
        document.querySelector("#historic").style.display = "block"
        document.querySelector("#calculator").style.display = "none"
        document.querySelector("#openCloseHist").style.display = "none"
        document.querySelector("#openCloseCalc").style.display = "block"
        openHistCalc = 1
    }
}
