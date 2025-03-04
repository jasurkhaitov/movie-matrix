import BrowseItems from '@/components/browse/BrowseItems'
import Navbar from '@/components/shared/Navbar'

export default function MainPage() {
	return (
		<>
			<Navbar />

			<div className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10 py-10 space-y-12'>
				{/* Movies Section */}
				<div>
					<h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6'>
						Movies
					</h1>
					<BrowseItems url='imdb/top250-movies' header='Top 250 Movies' linkToPage='/top-250-movies' />

					<BrowseItems url='imdb/top-box-office' header='Top Box Office' linkToPage='/top-box-office' />

					<BrowseItems url='imdb/most-popular-movies' header='Most Popular Movies' linkToPage='/most-popular-movies' />
				</div>

					<div className='h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent my-10' />
				{/* TV Shows Section */}
				<div>
					<h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6'>
						TV Shows
					</h1>
					<BrowseItems url='imdb/top250-tv' header='Top 250 TV Shows' linkToPage='/top-250-tv-shows' />

					<BrowseItems url='imdb/most-popular-tv' header='Most Popular TV Shows' linkToPage='/most-popular-tv-shows' />
				</div>

					<div className='h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent my-10' />
				{/* Indian Spotlight Section */}
				<div>
					<h1 className='text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6'>
						Indian Spotlight
					</h1>
					<BrowseItems url='imdb/india/top-rated-malayalam-movies' header='Top Rated Malayalam Movies' linkToPage='/top-rated-malayalam-movies' />

					<BrowseItems url='imdb/india/upcoming' header='Most Anticipated New Indian Movies and Shows' linkToPage='/india/upcoming' />

					<BrowseItems url='imdb/india/trending-tamil' header='Trending Tamil Movies' linkToPage='/india/trending-tamil' />

					<BrowseItems url='imdb/india/trending-telugu' header='Trending Telugu Movies' linkToPage='/india/trending-telugu' />

					<BrowseItems url='imdb/india/top-rated-tamil' header='Top Rated Tamil Movies' linkToPage='/india/top-rated-tamil' />

					<BrowseItems url='imdb/india/top-rated-indian' header='Top Rated Indian Movies' linkToPage='/india/top-rated-indian' />
				</div>
			</div>
		</>
	)
}
