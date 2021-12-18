const c = el => document.querySelector(el);
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let buttonBack = c('.return');

favorites.map((photo, index)=>{
    let modelPhoto = c('.imgLiked').cloneNode(true);
    modelPhoto.querySelector('img').src = photo;
    modelPhoto.setAttribute('data-key', index);

    modelPhoto.addEventListener('click' , (e) =>{
        e.preventDefault();

        let indexPhoto = e.target.closest('.imgLiked').getAttribute('data-key');
        

    })

    c( '.album' ).append( modelPhoto );
})

buttonBack.addEventListener('click' , () =>{
    window.open('../index.html', '_self');
})

