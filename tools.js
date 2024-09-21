export async function getCurrentWeather({ location }) {
    try {
        const weatherUrl = new URL("http://api.openweathermap.org/data/2.5/forecast?q[location]=Kielce&appid=078039429123e11aefe7e8215a938288");
        weatherUrl.searchParams.append("q", location)
        weatherUrl.searchParams.append("units", "imperial")
        const res = await fetch(weatherUrl)
        const data = await res.json()
        return JSON.stringify(data)
    } catch(err) {
        console.error(err.message)
    }
}

export async function getLocation() {
    try {
        const response = await fetch('https://ipapi.co/json/')
        const text = await response.json()
        return JSON.stringify(text)
    } catch (err) {
        console.error(err.message)
    }
}

export const functions = [
    {
        function: getCurrentWeather,
        parse: JSON.parse,
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description: "The name of the city from where to get the weather"
                }
            },
            required: ["location"]
        }
    },
    {
        function: getLocation,
        parameters: {
            type: "object",
            properties: {}
        }
    },
]