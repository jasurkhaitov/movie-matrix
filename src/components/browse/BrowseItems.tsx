import type { Movie } from '@/typescript/type'
import MoviesCard from '../movies-card/ItemCard'
import { useEffect, useState } from 'react'
import { ApiService } from '@/service/ApiService'
import { Link } from 'react-router-dom'
import MoviesCardSkeleton from '../movies-card/ItemCardSkeleton'

interface MoviesPartProps {
	url: string
	header: string
	linkToPage: string
}

export default function BrowseItems({
	url,
	header,
	linkToPage,
}: MoviesPartProps) {
	const [movies, setMovies] = useState<Movie[] | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		ApiService.fetching(url).then(data => {
			setMovies(data.data.slice(0, 6))
			setLoading(false)
		})
	}, [url])

	const fakeSkeletonArray = Array.from({ length: 20 }, (_, index) => index)

	return (
		<div className='mx-auto'>
			<div className='flex items-center justify-between pb-5 px-4 md:px-6'>
				<div className='flex items-center gap-3'>
					<div className='w-2 h-12 bg-yellow-400 rounded-sm'></div>
					<h1 className='text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100'>
						{header}
					</h1>
				</div>
				<Link
					to={linkToPage}
					className='text-blue-600 dark:text-blue-500 hover:underline'
				>
					See all →
				</Link>
			</div>

			{loading ? (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
					{fakeSkeletonArray.map(index => (
						<MoviesCardSkeleton key={index} />
					))}
				</div>
			) : (
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'>
					{movies?.map(movie => (
						<MoviesCard key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</div>
	)
}
