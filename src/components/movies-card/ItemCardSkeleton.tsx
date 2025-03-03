import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export default function ItemCardSkeleton() {
	return (
		<Card className='overflow-hidden p-0 gap-0 rounded-xl border shadow-lg bg-background'>
			<div className='relative overflow-hidden aspect-[2/3]'>
				<Skeleton className='w-full h-full absolute' />

				<div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent' />
			</div>

			<CardContent className='p-2'>
				<Skeleton className='h-6 w-full mb-2' />

				<div className='flex items-center justify-between'>
					<Skeleton className='h-4 w-16' />
					<Skeleton className='h-4 w-20' />
				</div>
			</CardContent>

			<CardFooter className='p-3 mt-1'>
				<Skeleton className='h-9 w-full' />
			</CardFooter>
		</Card>
	)
}
