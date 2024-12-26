import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import Solutions from '../../components/Solutions'
import Testimonials from '../../components/Testimonials'
import Footer from '../../components/Footer'

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
            <main>
                <Hero />
                <Features />
                <Solutions />
                <Testimonials />
            </main>
            <Footer />
        </div>
    )
}

export default LandingPage