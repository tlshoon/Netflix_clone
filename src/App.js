import requests from './api/requests';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />

      <Row 
        title = 'NETFLIX ORIGINALS'
        id = 'NO'
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Moives" id="TR" fetchUrl={requests.fetchComedyMovies} />

      <Footer />
    </div>
  );
}

export default App;
