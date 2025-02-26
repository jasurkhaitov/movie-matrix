import { MessageCircle } from 'lucide-react'
import { Button } from '../ui/button'
import LogoIcon from './LogoIcon'
import { ModeToggle } from './ModeToggle'
import { DrawerNav } from './Modal'
import SearchInput from '../search/SearchInput'

export default function Navbar() {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-background shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-gray-800'>
			<div className='max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-10'>
				<div className='flex h-16 items-center justify-between'>
					<LogoIcon />

					<div className='flex items-center gap-5'>
						<DrawerNav />

						<SearchInput />
					</div>

					<div className='flex items-center gap-4'>
						<Button variant='ghost' size='icon' asChild>
							<a
								href='https://t.me/jasurkhaitov'
								target='_blank'
								rel='noopener noreferrer'
							>
								<MessageCircle className='' />
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
