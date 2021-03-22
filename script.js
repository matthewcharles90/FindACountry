// const url = "https:;//restcountries.eu/rest/v2/all";




(
    async () => {

        const appContainer = document.getElementById("app");

        const fetchResponse = await fetch("https://restcountries.eu/rest/v2/all");

        const data = await fetchResponse.json();

        data.slice(0, 25).forEach(
            country => {
                const { name, capital, flag, region, population } = country;
                // console.log(name, capital, region, population);
                const FLAG = `
                        <div class="flag-div" data-aos="fade-up" data-aos-duration="1200">
                            <div class="img-div">
                                <img src=${ flag } alt="${ name }">
                            </div>
                            <div class="value-div">
                                <h3>${ name }</h3>
                                <p>
                                    <span>Population</span>
                                    <span>${ population }</span>
                                </p>
                                <p>
                                    <span>Region</span>
                                    <span>${ region }</span>
                                </p>
                                <p>
                                    <span>Capital</span>
                                    <span>${ capital }</span>
                                </p>
                            </div>
                        </div>

                    `;
                console.log(FLAG);
                appContainer.innerHTML += FLAG;
                ;

            }
        );

    }

)();