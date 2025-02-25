import { Search } from 'lucide-react'
import { Button } from '../ui/button'

export default function SearchInput() {
	return (
		<div className='px-6 min-w-[600px]'>
			<div className='relative max-w-2xl mx-auto'>
				<div className='relative'>
					<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
					<input
						type='search'
						placeholder='Search...'
						className='h-10 w-full rounded-md border border-gray-300 bg-muted px-10 text-foreground placeholder-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:ring-primary/70'
					/>

					<Button
						size='sm'
						className='absolute right-1.5 top-1/2 h-7 -translate-y-1/2 px-4'
					>
						Search
					</Button>
				</div>
			</div>
		</div>
	)
}
