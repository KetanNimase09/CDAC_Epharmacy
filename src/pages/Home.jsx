import React from 'react'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import FrequentlyPurchased from '../components/FrequentlyPurchased'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <FrequentlyPurchased />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
