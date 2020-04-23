var openMenu = 0
var openPreview = 0
var openShare = 0

function openClose() {
    if (openMenu == 1) {
        document.querySelector(".sidebarMenu").style.right = -155 + "px"
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

function openCloseShare() {
    if (openShare == 1) {
        document.querySelector(".share-background").style.right = -10000 + "px"
        openShare = 0
    } else {
        document.querySelector(".share-background").style.right = 0
        openShare = 1
    }
    }

function share(){
    document.querySelector(".sidebarMenu").style.right = -155 + "px"
    document.querySelector(".menu-background").style.right = -10000 + "px"
    openMenu = 0
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O título da sua página',
			text: 'Um texto de resumo',
			url: 'https://seusite.com/sua_url',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	} else {
        document.querySelector(".share-background").style.right = 0
        openShare = 1
    }
}

