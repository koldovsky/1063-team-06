const aboutNorwayFact = [
    {
        id: 1,
        aboutNorwayFactNumber: `17,000+`,
        aboutNorwayFactText: `Fjords`,
    },
    {
        id: 2,
        aboutNorwayFactNumber: `36`,
        aboutNorwayFactText: `Kilometers of coastal strip`,
    },
    {
        id: 3,
        aboutNorwayFactNumber: `450,000+`,
        aboutNorwayFactText: `Freshwater lakes`,
    },
    {
        id: 4,
        aboutNorwayFactNumber: `10,000`,
        aboutNorwayFactText: `Waterfalls`,
    },
];


const backgroundImages =[
    '../img/about_norway/forest-grey.jpg',
    '../img/about_norway/foggy-forest-grey.jpg',
    '../img/about_norway/norway_forest.jpg',
    '../img/about_norway/norway_mounts.jpg',
    '../img/about_norway/tromso.jpg',
]

let currentImageIndex = 0;
const backgrounContainer = document.querySelector('.about-norway__letter');
    
function changeBackgroun(){
    backgrounContainer.style.backgroundImage = `URL(${backgroundImages[currentImageIndex]})`
    currentImageIndex = (currentImageIndex+1)%backgroundImages.length;
}


setInterval(changeBackgroun, 3000);

renderAboutNorweyFact(aboutNorwayFact);


function renderAboutNorweyFact(aboutNorwayFact) {
    const norwayFactContainer = document.querySelector('.about-norway__fact-list');
    norwayFactContainer.innerHTML = ' ';
    for (const norwayFact of aboutNorwayFact) {
        norwayFactContainer.innerHTML +=
            `<li  style= "list-style-type: none" class="about-norway__fact-item">
                <p class="about-norway__fact-number"><span>${norwayFact.aboutNorwayFactNumber}</span></p>
                <p class="about-norway__fact-text">${norwayFact.aboutNorwayFactText}</p>
            </li>`;
    };
};
