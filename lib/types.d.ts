import { HourlyWeather } from '@/lib/types'

type HourlyWeather = {
	datetime: string
	datetimeEpoch: number
	temp: number
	feelslike: number
	humidity: number
	dew: number
	precip: number
	precipprob: number
	snow: number
	snowdepth: number
	preciptype: string[] | null
	windgust: number
	windspeed: number
	winddir: number
	pressure: number
	visibility: number
	cloudcover: number
	solarradiation: number
	solarenergy: number
	uvindex: number
	severerisk: number
	conditions: string
	icon: string
	stations: string[]
	source: string
}

type DailyWeather = {
	datetime: string
	datetimeEpoch: number
	tempmax: number
	tempmin: number
	temp: number
	feelslikemax: number
	feelslikemin: number
	feelslike: number
	dew: number
	humidity: number
	precip: number
	precipprob: number
	precipcover: number
	preciptype: string[]
	snow: number
	snowdepth: number
	windgust: number
	windspeed: number
	winddir: number
	pressure: number
	cloudcover: number
	visibility: number
	solarradiation: number
	solarenergy: number
	uvindex: number
	severerisk: number
	sunrise: string
	sunriseEpoch: number
	sunset: string
	sunsetEpoch: number
	moonphase: number
	conditions: string
	description: string
	icon: string
	stations: string[]
	source: string
}

type HourlyDailyWeather = {
	hours: HourlyWeather[]
} & DailyWeather

type CurrentConditions = {
	datetime: string
	datetimeEpoch: number
	temp: number
	feelslike: number
	humidity: number
	dew: number
	precip: number
	precipprob: number
	snow: number
	snowdepth: number
	preciptype: string[] | null
	windgust: number
	windspeed: number
	winddir: number
	pressure: number
	visibility: number
	cloudcover: number
	solarradiation: number
	solarenergy: number
	uvindex: number
	conditions: string
	icon: string
	stations: string[]
	source: string
	sunrise: string
	sunriseEpoch: number
	sunset: string
	sunsetEpoch: number
	moonphase: number
}

type WeatherData = {
	queryCost: number
	latitude: number
	longitude: number
	resolvedAddress: string
	address: string
	timezone: string
	tzoffset: number
	description: string
	days: HourlyDailyWeather[]
	currentConditions: CurrentConditions
}

type Condition = {
	id: string
	desc: string
	icon: JSX.Element | null
}

type AqiData = {
	status: string
	data: {
		aqi: number
		idx: number
		attributions: {
			url: string
			name: string
			logo?: string
		}[]
		city: {
			geo: [number, number]
			name: string
			url: string
			location: string
		}
		dominentpol: string
		iaqi: {
			[key: string]: {
				v: number
			}
		}
		time: {
			s: string
			tz: string
			v: number
			iso: string
		}
		forecast: {
			daily: {
				o3: {
					avg: number
					day: string
					max: number
					min: number
				}[]
				pm10: {
					avg: number
					day: string
					max: number
					min: number
				}[]
				pm25: {
					avg: number
					day: string
					max: number
					min: number
				}[]
			}
		}
		debug?: {
			sync: string
		}
	}
}

type AQIMessage = {
	from: number
	to: number
	grade: string
	text: string
}

type MoonPhaseMessage = {
	from: number
	to: number
	text: string
}

type AstronomyData = {
	queryCost: number
	latitude: number
	longitude: number
	resolvedAddress: string
	address: string
	timezone: string
	tzoffset: number
	days: AstronomyDay[]
}

type AstronomyDay = {
	sunrise: string
	sunset: string
	moonphase: number
	moonrise: string
	moonset: string
}

export {
	WeatherData,
	CurrentConditions,
	DailyWeather,
	HourlyWeather,
	HourlyDailyWeather,
	Condition,
	AqiData,
	AQIMessage,
	MoonPhaseMessage,
	AstronomyData
}