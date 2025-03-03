'use client'

import { useState } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Clock, Star, Info } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Movie } from '@/typescript/type'

export default function MoviesCard({ movie }: { movie: Movie }) {
	const [hovered, setHovered] = useState(false)

	const formatVotes = (votes: number): string => {
		if (votes >= 1000000) {
			return `${(votes / 1000000).toFixed(1)}M`
		} else if (votes >= 1000) {
			return `${(votes / 1000).toFixed(1)}K`
		}
		return votes.toString()
	}

	return (
		<Card
			className='group relative overflow-hidden p-0 gap-0 rounded-xl border shadow-lg transition-all duration-300 bg-background hover:shadow-xl'
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<div className='relative overflow-hidden aspect-[2/3]'>
				<img
					src={movie.primaryImage || '/placeholder.svg?height=450&width=300'}
					alt={movie.primaryTitle}
					className={cn(
						'w-full h-full object-cover transition-transform duration-500',
						hovered ? 'scale-110' : 'scale-100'
					)}
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
				<div
					className={cn(
						'absolute bottom-2 left-2 right-2 items-center justify-between transition-transform duration-500',
						hovered ? 'flex' : 'hidden'
					)}
				>
					<div className='flex items-center gap-1 bg-yellow-400/90 px-2 py-1 rounded-md'>
						<Star className='h-4 w-4 fill-yellow-900 text-yellow-900' />
						<span className='text-yellow-900 font-bold text-sm'>
							{movie.averageRating?.toFixed(1)}
						</span>
					</div>
					<span className='text-white text-sm font-medium bg-black/50 px-2 py-1 rounded-md'>
						{formatVotes(movie.numVotes)} votes
					</span>
				</div>
			</div>

			<CardContent className='p-2'>
				<h3 className='text-lg font-semibold group-hover:text-primary transition-colors line-clamp-1 mb-2'>
					{movie.primaryTitle}
				</h3>

				<div className='flex items-center text-sm text-muted-foreground justify-between'>
					<span className='font-medium'>{movie.startYear} years</span>
					{movie.runtimeMinutes && (
						<span className='flex items-center gap-1 text-green-600 dark:text-green-400 font-medium'>
							<Clock className='w-4 h-4' />
							{movie.runtimeMinutes} min
						</span>
					)}
				</div>
			</CardContent>

			<CardFooter className='pb-4 px-2 pt-2'>
				<Button variant='default' className='w-full gap-2'>
					<Info className='h-4 w-4' />
					Details
				</Button>
			</CardFooter>
		</Card>
	)
}
