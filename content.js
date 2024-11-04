

function masquerShort () {
    const link = document.querySelectorAll('a[href*="/shorts/"]');
    link.forEach(section => {
        section.style.display = 'none';
    });
    console.log("test fonction");
}

window.addEventListener('load', masquerShort);

const observer = new MutationObserver(masquerShort);
observer.observe(document.body, { childList: true, subtree: true });
