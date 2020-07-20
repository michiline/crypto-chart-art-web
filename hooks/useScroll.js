import { useState, useEffect } from 'react'

const useScroll = (history) => {
	const [scrolled, setScrolled] = useState(false)
	useEffect(() => {
		const scrollListener = (e) => {
			if (window.scrollY === 0) {
				setScrolled(false)
			} 
			if (window.scrollY > 0) {
				setScrolled(true)
			}
		  }
		  window.addEventListener('scroll', scrollListener)
		return () => window.removeEventListener('scroll', scrollListener)
	},[history])
	return [scrolled]
}

export default useScroll