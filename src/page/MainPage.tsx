import { MoviesSlider } from '@/components/browse/MoviesSlider'
import Navbar from '@/components/shared/Navbar'
import { ApiService } from '@/service/ApiService'
import { Movie } from '@/typescript/type'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
	const [movies, setMovies] = useState<Movie[] | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		ApiService.fetching('imdb/top250-movies').then(data => {
			setMovies(data.data)
			setLoading(false)
		})
	}, [])

	return (
		<>
			<Navbar />

			<div className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10'>

			<div className='flex items-center justify-between p-4 md:p-6'>
				<h2 className='text-2xl font-bold'>Top 250 Movies</h2>
				<Link to='/movies' className='text-blue-500 hover:underline'>
					See all →
				</Link>
			</div>

			{loading ? (
				<div className='flex justify-center items-center h-40'>
					<p className='text-gray-500'>Loading movies...</p>
				</div>
			) : (
				<MoviesSlider movies={movies || []} />
			)}
			</div>

		</>
	)
}
