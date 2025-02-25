import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Movie } from '@/typescript/type'

export function MoviesSlider({ movies }: { movies: Movie[] }) {
	return (
		<Carousel className='w-full max-w-7xl mx-auto'>
			<CarouselContent className='gap-4'>
				{movies.map(movie => (
					<CarouselItem
						key={movie.id}
						className='basis-5/5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/4'
					>
						<div className='p-2'>
							<Card className='shadow-lg hover:shadow-xl transition-shadow duration-300'>
								<CardContent className='flex flex-col items-center p-4'>
									<img
										src={
											movie.primaryImage ||
											'/placeholder.svg?height=300&width=200'
										}
										alt={movie.primaryTitle}
										width={200}
										height={300}
										className='rounded-lg mb-3 object-cover shadow-md'
									/>
									<h3 className='text-lg font-semibold text-center line-clamp-1'>
										{movie.primaryTitle}
									</h3>
									<p className='text-sm text-gray-500'>{movie.startYear}</p>
									<p className='text-sm font-bold text-yellow-500'>
										⭐ {movie.averageRating?.toFixed(1)}
									</p>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
