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
    'https://raw.githubusercontent.com/koldovsky/1063-team-06/9aa4b92d3410e353d0704ec6a50b15b02325a539/img/about_norway/forest-grey.jpg',
    'https://raw.githubusercontent.com/koldovsky/1063-team-06/9aa4b92d3410e353d0704ec6a50b15b02325a539/img/about_norway/foggy-forest-grey.jpg',
    'https://raw.githubusercontent.com/koldovsky/1063-team-06/main/img/about_norway/norway_forest.jpg',
    'https://raw.githubusercontent.com/koldovsky/1063-team-06/main/img/about_norway/norway_mounts.jpg',
    'https://raw.githubusercontent.com/koldovsky/1063-team-06/main/img/about_norway/tromso.jpg',
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
