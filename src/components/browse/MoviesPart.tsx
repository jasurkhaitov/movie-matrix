'use client'

import { useState } from 'react'
import { Card, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Star, Info, LayoutGrid, List } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Movie } from '@/typescript/type'

export default function MoviesPart({ movies }: { movies: Movie[] }) {
	const [hoveredId, setHoveredId] = useState<string | null>(null)
	const [isGridView, setIsGridView] = useState<boolean>(true)

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
			<div className='flex justify-end mb-4'>
				<Button variant='outline' onClick={() => setIsGridView(!isGridView)}>
					{isGridView ? (
						<List className='w-5 h-5' />
					) : (
						<LayoutGrid className='w-5 h-5' />
					)}
					<span className='ml-2'>
						{isGridView ? 'Compact View' : 'Grid View'}
					</span>
				</Button>
			</div>

			<div
				className={cn(
					isGridView
						? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6'
						: 'space-y-4'
				)}
			>
				{movies.map(movie => (
					<Card
						key={movie.id}
						className={cn(
							'group relative overflow-hidden border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-background',
							isGridView ? 'py-0' : 'flex flex-col sm:flex-row p-4 gap-4'
						)}
						onMouseEnter={() => setHoveredId(movie.id)}
						onMouseLeave={() => setHoveredId(null)}
					>
						<div
							className={cn(
								'relative overflow-hidden',
								isGridView
									? 'rounded-t-xl aspect-[2/3]'
									: 'rounded-lg w-full sm:w-32 h-48 sm:h-44 flex-shrink-0'
							)}
						>
							<img
								src={
									movie.primaryImage || '/placeholder.svg?height=450&width=300'
								}
								alt={movie.primaryTitle}
								className={cn(
									'w-full h-full object-cover transition-transform duration-500',
									hoveredId === movie.id ? 'scale-110' : 'scale-100'
								)}
							/>
						</div>

						<div
							className={cn(
								'flex flex-col',
								isGridView ? 'p-4 py-0' : 'flex-1 py-2 sm:py-0'
							)}
						>
							<h3
								className={cn(
									'font-semibold group-hover:text-primary transition-colors',
									isGridView
										? 'text-lg line-clamp-1'
										: 'text-xl line-clamp-2 mb-2'
								)}
							>
								{movie.primaryTitle}
							</h3>

							<div
								className={cn(
									'flex items-center gap-2',
									isGridView ? 'mb-3' : 'mb-2'
								)}
							>
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

							<div
								className={cn(
									'flex items-center text-sm text-muted-foreground',
									isGridView ? 'justify-between mt-2' : 'gap-4 mb-auto'
								)}
							>
								<span className='font-medium'>{movie.startYear}</span>
								{movie.runtimeMinutes && (
									<span className='flex items-center gap-1 text-green-600 dark:text-green-400 font-medium'>
										<Clock className='w-4 h-4' />
										{movie.runtimeMinutes} min
									</span>
								)}
							</div>

							{!isGridView && (
								<div className='mt-3 sm:mt-auto pt-2'>
									<Button
										variant='default'
										size={isGridView ? 'default' : 'sm'}
										className='gap-2 cursor-pointer'
									>
										<Info className='h-4 w-4' />	
										Details
									</Button>
								</div>
							)}
						</div>

						<CardFooter
							className={cn(
								'px-4 pb-4 pt-0 flex gap-2',
								!isGridView && 'hidden'
							)}
						>
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
