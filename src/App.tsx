import { Route, Routes } from 'react-router-dom'
import MainPage from './page/MainPage'
import NotFoundPage from './page/NotFoundPage'

export default function App() {
	return (
		<Routes>
			<Route path='' element={<MainPage />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	)
}
