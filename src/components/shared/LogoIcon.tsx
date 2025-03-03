import LogoImg from '@/assets/svg/logoIcon.svg'
import { Link } from 'react-router-dom'

export default function LogoIcon() {
	return (
		<Link to={'/'} className='font-montserrat flex items-center gap-2'>
			<img src={LogoImg} className='w-10 h-10' alt='JasX Logo Image' />
			<p className='text-xl font-bold'>JasX</p>
		</Link>
	)
}
