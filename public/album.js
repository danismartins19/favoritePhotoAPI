//mapear o array e exibir imagens na tela
//curtir-descurtir imagem
//renderizar as imagens curtidas a cada evento
const c = el => document.querySelector(el);

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


favorites.map((photo, index)=>{
    let modelPhoto = c('.imgLiked').cloneNode(true);
    modelPhoto.querySelector('img').src = photo;
    modelPhoto.setAttribute('data-key', index);



    c( '.album' ).append( modelPhoto );
})
