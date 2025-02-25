export interface Movie {
  id: string
  url: string
  primaryTitle: string
  originalTitle: string
  type: string
  description: string
  primaryImage: string | null
  contentRating: string | null
  startYear: number
  endYear: number | null
  releaseDate: string
  interests: string[]
  genres: string[]
  averageRating: number
  numVotes: number
}