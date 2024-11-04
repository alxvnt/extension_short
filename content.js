

function masquerShort () {
    //const link = document.querySelectorAll('a[href*="/shorts/"]');
    const shortHead = document.querySelectorAll("#rich-shelf-header-container");
    //const viewNumber = document.querySelectorAll(".ShortsLockupViewModelHostMetadataSubhead");
    const butt = document.querySelectorAll(".ShortsLockupViewModelHost");
   shortHead.forEach(section => {
        section.style.display = 'none';
   })
    butt.forEach(section => {
        section.style.display = 'none';
    });
    
    console.log("test fonction");
}

window.addEventListener('load', masquerShort);

const observer = new MutationObserver(masquerShort);
observer.observe(document.body, { childList: true, subtree: true });

//yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response