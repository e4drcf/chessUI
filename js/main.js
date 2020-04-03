
let openPlay = () => {
    activate(playContent);
    deactivate(archiveContent);
    archiveTab.classList.remove("active-tab");
    playTab.classList.add("active-tab");
}
let openArchive = () => {
    activate(archiveContent);
    deactivate(playContent);
    archiveTab.classList.add("active-tab");
    playTab.classList.remove("active-tab");

}
let activate = (content) => {
    content.style.display = "flex";
}
let deactivate = (content) => {
    content.style.display = "none";
}
let playTab = document.getElementById('play-tab');
document.getElementById('play-tab').addEventListener('click', openPlay);
let archiveTab = document.getElementById('archive-tab');
document.getElementById('archive-tab').addEventListener('click', openArchive);

let playContent = document.getElementById('play');
let archiveContent = document.getElementById('archive');


