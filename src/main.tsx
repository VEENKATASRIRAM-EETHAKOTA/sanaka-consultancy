import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const Root = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active')
                }
            })
        }, observerOptions)

        const revealElements = document.querySelectorAll('.reveal')
        revealElements.forEach((el) => observer.observe(el))

        // Re-observe when DOM changes (for routing)
        const mutationObserver = new MutationObserver(() => {
            const newElements = document.querySelectorAll('.reveal:not(.active)')
            newElements.forEach((el) => observer.observe(el))
        })

        mutationObserver.observe(document.body, { childList: true, subtree: true })

        return () => {
            observer.disconnect()
            mutationObserver.disconnect()
        }
    }, [])

    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
