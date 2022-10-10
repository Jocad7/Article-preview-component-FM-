const shareBtn = document.querySelector('.shareIcon-container');
const shareIcon = document.querySelector('#share-icon');
const shareOpt = document.querySelector('.share-top');

shareBtn.addEventListener('click', ()=>{
    shareOpt.classList.toggle('inactive')
    const shareIconColor = shareIcon.getAttribute('fill');
    if(shareIconColor === '#6E8098'){
        shareIcon.setAttribute('fill', 'var(--Light-Grayish-Blue)');
        shareBtn.setAttribute('style', 'background-color: var(--Desaturated-Dark-Blue)');
    } else {
        shareIcon.setAttribute('fill', '#6E8098');
        shareBtn.setAttribute('style', 'background-color: var(--Light-Grayish-Blue)');
    }
})