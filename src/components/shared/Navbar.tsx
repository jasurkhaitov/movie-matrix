import { Contact, Search } from 'lucide-react'
import { Button } from '../ui/button'
import LogoIcon from './LogoIcon'
import { ModeToggle } from './ModeToggle'

export default function Navbar() {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-background shadow-md backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-gray-800'>
			<div className='max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					<LogoIcon />

					<div className='flex-1 px-6'>
						<div className='relative max-w-2xl mx-auto'>
							<div className='relative'>
								<Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
								<input
									type='search'
									placeholder='Search IMDb'
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

					<div className='flex items-center gap-4'>
						<Button variant='ghost' size='icon' asChild>
							<a
								href='https://t.me/jasurkhaitov'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Contact className='w-10 h-10' />
								<span className='sr-only'>Contact</span>
							</a>
						</Button>
						<ModeToggle />
					</div>
				</div>
			</div>
		</header>
	)
}
