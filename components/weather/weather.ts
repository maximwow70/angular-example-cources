(function () {
  navigator.geolocation.getCurrentPosition((location) => {
    const apiKey = "cdd4f90e348dd8e37545ca74eb334f05";
    const apiBase = "https://api.openweathermap.org/data/2.5/onecall";
    fetch(
      `${apiBase}?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        document.querySelector(".weather").innerHTML = `
            <div>temp: ${(data.current.temp - 273).toFixed(2)} C</div>
            <div>humidity: ${data.current.humidity} %</div>
            <div>pressure: ${data.current.pressure}</div>
        `;
      });

    const options = {
      method: "POST",
      headers: {
        "X-RapidAPI-Key": "45cdbb94c0mshcb7a755e815b533p1e674ejsn7b059bfb7178",
        "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
      },
    };

    fetch(
      "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=aquarius&day=today",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  });
})();
