console.log('hello about-norway')

const aboutNorwayFact = [
    {
        id:1,
        aboutNorwayFactNumber: `17,000+`,
        aboutNorwayFactText: `Fjords`,
    },
    {
        id:2,
        aboutNorwayFactNumber: `450,000+`,
        aboutNorwayFactText: `Freshwater lakes`,
    },
    {
        id:3,
        aboutNorwayFactNumber: `10,000`,
        aboutNorwayFactText: `Waterfalls`,
    },
];

renderAboutNorweyFact(aboutNorwayFact);

function renderAboutNorweyFact(aboutNorwayFact){
    const norwayFactContainer = document.querySelector('.about-norway__fact');
    norwayFactContainer.innerHTML = ' ';
    for (const norwayFact of aboutNorwayFact){
        norwayFactContainer.innerHTML +=
            `<div class="about-norway__fact-item">
                <p class="about-norway__fact-number"><span>${norwayFact.aboutNorwayFactNumber}</span></p>
                <p class="about-norway__fact-text">${norwayFact.aboutNorwayFactText}</p>
            </div>`;
    };
};