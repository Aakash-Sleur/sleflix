import React from 'react'
import Nav from '../Components/Nav'
import Banner from '../Components/Banner'
import Row from '../Components/Row'
import requests from '../Utils/Requests'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>

        <Nav />

        <Banner />

        <Row 
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
        <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        />
        <Row 
        title="Trending"
        fetchUrl={requests.fetchTrending}
        />
        <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        />
        <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        />
        <Row 
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        />
        <Row 
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        />
        <Row 
        title="Documentries"
        fetchUrl={requests.fetchDocumentariesMovies}
        />
        
    </div>
  )
}

export default HomeScreen