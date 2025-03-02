import MoviesPart from '@/components/browse/MoviesPart'
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
			setMovies(data.data.slice(0, 12))
			setLoading(false)
		})
	}, [])

	return (
		<>
			<Navbar />

			<div className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-5'>
				<div className='flex items-center justify-between px-4 md:px-6'>
					<div className='flex items-center gap-3'>
						<div className='w-2 h-16 bg-yellow-400 rounded-sm'></div>
						<h1 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
							Top 250 Movies
						</h1>
					</div>
					<Link
						to='/movies'
						className='text-blue-600 dark:text-blue-500 hover:underline'
					>
						See all →
					</Link>
				</div>

				{loading ? (
					<div className='flex justify-center items-center h-40'>
						<p className='text-gray-500'>Loading movies...</p>
					</div>
				) : (
					<MoviesPart movies={movies || []} />
				)}
			</div>
		</>
	)
}
