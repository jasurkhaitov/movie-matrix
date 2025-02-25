import { Button } from '@/components/ui/button'
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from '@/components/ui/drawer'
import { Film, Tv, Trophy, Menu } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import LogoIcon from './LogoIcon'

export function DrawerNav() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant='outline' className='gap-2'>
					<Menu className='h-5 w-5' /> Menu
				</Button>
			</DrawerTrigger>
			<DrawerContent className='h-[65vh]'>
				<div className='mx-auto w-full max-w-7xl'>
					<DrawerHeader className='border-b pb-4'>
						<DrawerTitle>
							<LogoIcon />
						</DrawerTitle>
					</DrawerHeader>

					<div className='scrollbar-hide overflow-y-auto max-h-[calc(95vh-180px)]'>
						<div className='p-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='space-y-6 p-4 rounded-xl bg-muted/50'>
								<div className='flex items-center gap-3'>
									<div className='p-2 rounded-lg bg-yellow-400/10'>
										<Film className='text-yellow-400 h-5 w-5' />
									</div>
									<h2 className='text-lg font-semibold'>Movies</h2>
								</div>
								<Separator />
								<nav className='grid gap-3'>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top 250 Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top Box Office
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Most Popular Movies
									</a>
								</nav>
							</div>

							<div className='space-y-6 p-4 rounded-xl bg-muted/50'>
								<div className='flex items-center gap-3'>
									<div className='p-2 rounded-lg bg-yellow-400/10'>
										<Tv className='text-yellow-400 h-5 w-5' />
									</div>
									<h2 className='text-lg font-semibold'>TV Shows</h2>
								</div>
								<Separator />
								<nav className='grid gap-3'>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top 250 TV Shows
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Most Popular TV Shows
									</a>
								</nav>
							</div>

							{/* India Spotlight Section */}
							<div className='space-y-6 p-4 rounded-xl bg-muted/50'>
								<div className='flex items-center gap-3'>
									<div className='p-2 rounded-lg bg-yellow-400/10'>
										<Trophy className='text-yellow-400 h-5 w-5' />
									</div>
									<h2 className='text-lg font-semibold'>India Spotlight</h2>
								</div>
								<Separator />
								<nav className='grid gap-3'>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top Rated Malayalam Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Most Anticipated New Indian Movies and Shows
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Trending Tamil Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Trending Telugu Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top Rated Telugu Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top Rated Tamil Movies
									</a>
									<a
										href='#'
										className='hover:text-yellow-400 transition-colors duration-200 flex items-center'
									>
										Top Rated Indian Movies
									</a>
								</nav>
							</div>
						</div>
					</div>

					<DrawerFooter className='border-t mt-4'>
						<DrawerClose asChild>
							<Button className='w-full' variant='outline'>
								Close Menu
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
