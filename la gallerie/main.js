const imageUrlInput = document.getElementById('imageUrl');
const imageAltInput = document.getElementById('imageAlt');
const addButton = document.getElementById('addImage');
const clearButton = document.getElementById('clearGallery');
const gallery = document.getElementById('galleryContainer');
const counter = document.getElementById('imageCounter');

let images = [];

// Je créé un objet qui contient un url et l'alt de l'image
class ImageItem {
    constructor(url, alt) {
        this.url = url;
        this.alt = alt;
    }

    createImageBlock(index) {
        // On fait la div
        const div = document.createElement("div");
        div.className = "image-block"

        // on fait l'image
        const img = document.createElement("img");
        img.src = this.url;
        img.alt = this.alt;

        const btn = document.createElement('button')
        btn.textContent = '❌ Supprimer';
        btn.addEventListener("click", function (){
            // pseudoCode //
            // ici on fait le code de supression du block//
            removeImageFromIndex(index)
        })

        div.appendChild(img);
        div.appendChild(btn);

        return div;
    }
}

function removeImageFromIndex(index){
    const tempImages = []
    for(let i = 0; i < images.length; i++){
        if (i !== index){
            tempImages.push(images[i]);
        }
    }
    images = tempImages
    renderGallery();
}



// Fonction qui affiche notre gallery

// Fonction ajoute dans le tableau images

addButton.addEventListener('click', function (){
    const url = imageUrlInput.value.trim();
    const alt = imageAltInput.value.trim();

    if (url !== "" && alt !== ""){
        // je créé une instance d'image
        const newImage = new ImageItem(url, alt);
        images.push(newImage);

        // on nettoie les inputs
        imageUrlInput.value = "";
        imageAltInput.value = "";

        console.log(images)
    }
    renderGallery();
})

function renderGallery() {
    gallery.innerHTML = "";

    for(let i = 0; i < images.length; i++){
        const image = images[i].createImageBlock(i)
        gallery.appendChild(image);
    }
    updateCounter()
}

function updateCounter() {
    counter.textContent = `Total : ${images.length} image${images.length > 1 ? 's' : ''}`;
}

clearButton.addEventListener("click", function (){
    while (images.length > 0){
        images.pop();
    }
    renderGallery();

});


