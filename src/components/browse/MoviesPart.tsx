import { useState } from 'react'
import { Card, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Star, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Movie } from '@/typescript/type'

export default function MoviesPart({ movies }: { movies: Movie[] }) {
	const [hoveredId, setHoveredId] = useState<string | null>(null)

	const formatVotes = (votes: number): string => {
		if (votes >= 1000000) {
			return `${(votes / 1000000).toFixed(1)}M`
		} else if (votes >= 1000) {
			return `${(votes / 1000).toFixed(1)}K`
		}
		return votes.toString()
	}

	return (
		<div className='mx-auto'>
			<div
				className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
			>
				{movies.map(movie => (
					<Card
						key={movie.id}
						className='group relative overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-background'
						onMouseEnter={() => setHoveredId(movie.id)}
						onMouseLeave={() => setHoveredId(null)}
					>
						<div className='relative overflow-hidden rounded-t-xl aspect-[2/3]'>
							<img
								src={movie.primaryImage || '/placeholder.svg?height=450&width=300'}
								alt={movie.primaryTitle}
								className={cn(
								'w-full h-full object-cover transition-transform duration-500',
								hoveredId === movie.id ? 'scale-110' : 'scale-100'
							)}
						/>
						</div>

						<div className='p-4'>
							<h3 className='text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1'>
								{movie.primaryTitle}
							</h3>

							<div className='flex items-center gap-2 mb-3'>
								<div className='flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-md'>
									<Star className='h-4 w-4 fill-yellow-500 text-yellow-500' />
									<span className='text-yellow-700 dark:text-yellow-400 font-bold'>
										{movie.averageRating?.toFixed(1)}
									</span>
								</div>
								<span className='text-muted-foreground text-sm'>
									({formatVotes(movie.numVotes)})
								</span>
							</div>

							<div className='flex items-center text-sm text-muted-foreground justify-between mt-2'>
								<span className='font-medium'>{movie.startYear}</span>
								{movie.runtimeMinutes && (
									<span className='flex items-center gap-1 text-green-600 dark:text-green-400 font-medium'>
										<Clock className='w-4 h-4' />
										{movie.runtimeMinutes} min
									</span>
								)}
							</div>
						</div>

						<CardFooter className='px-4 pb-4 pt-0 flex gap-2'>
							<Button variant='default' className='w-full gap-2 cursor-pointer'>
								<Info className='h-4 w-4' />
								Details
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}
