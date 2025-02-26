export type Movie = {
	id: string
	url: string
	primaryTitle: string
	originalTitle: string
	type: string
	description: string
	primaryImage: string
	contentRating: string | null
	startYear: number
	endYear: number | null
	releaseDate: string
	interests: string[]
	countriesOfOrigin: string[]
	externalLinks: string[]
	spokenLanguages: string[]
	filmingLocations: string[]
	productionCompanies: {
		id: string
		name: string
	}[]
	budget: number | null
	grossWorldwide: number | null
	genres: string[]
	isAdult: boolean
	runtimeMinutes: number | null
	averageRating: number
	numVotes: number
}
