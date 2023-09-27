const tourItineraryInfo = [
    {
        id: 1,
        image: `img/tour_itinerary/license.png`,
        title: `Official License`,
        text: `We are a licensed tour operator and have all the necessary permits to conduct tours in Norway.`,
    },
    {
        id: 2,
        image: `img/tour_itinerary/guide.png`,
        title: `Guide`,
        text: `A professional guide will accompany you along the entire route, 
                who will show you the most beautiful places.`,
    },
    {
        id: 3,
        image: `img/tour_itinerary/satisfaction.png`,
        title: `Satisfaction`,
        text: `Norway will steal your heart from the very first day of our trip. 
                It is impossible not to fall in love with it!`,
    },
];

averageTemperatureNorway()
temperatureOslo();

async function temperatureOslo() {
    const respons = await fetch('https://api.open-meteo.com/v1/metno?latitude=59.9127&longitude=10.7461&current_weather=true');
    const current_temperature = await respons.json();
    const temteratureOslo = document.querySelector('.tour-itinerary__temperature-oslo');
    temteratureOslo.innerHTML = `<p>Oslo ${Math.round(current_temperature.current_weather.temperature)}°C</p>`;
};

async function averageTemperatureNorway() {
    const respons = await fetch('https://api.open-meteo.com/v1/metno?latitude=62&longitude=10&current_weather=true');
    const current_temperature = await respons.json();
    const temteratureNorway = document.querySelector('.tour-itinerary__temperature-norway');
    temteratureNorway.innerHTML = `<p>Average temperature in Norway ${Math.round(current_temperature.current_weather.temperature)}°C</p>`;
};

renderTourItineraryInfo(tourItineraryInfo);

function renderTourItineraryInfo(tourItineraryInfo) {
    const tourItineraryInfoContainer = document.querySelector('.tour-itinerary__info-list');
    tourItineraryInfo.innerHTML = ' ';
    for (const tourInfo of tourItineraryInfo) {
        tourItineraryInfoContainer.innerHTML +=
            `<li style= "list-style-type: none" class="tour-itinerary__item">
                <img src=${tourInfo.image} alt="License">
                <div>
                    <p><span>${tourInfo.title}</span></p>
                    <p>${tourInfo.text}</p>
                </div>
            </li>`
    };
};


