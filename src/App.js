import './App.css';

function App() {

  const logos = [
    { logo: 'botas-logo.png', color: '#a70202' },
    { logo: 'facebook.png', color: '#526CFF' },
    { logo: 'insta.png', color: '#FF52C4' },
    { logo: 'tesla.png', color: '#8F8F8F' },
    { logo: 'twitter.png', color: '#0085FF' }
  ]

  return (
    <div className="App">
      <div className='overlay'></div>

      <div className='d-flex flex-column align-items-center'>
        <img src='868841-logo.png' className='img-fluid ' style={{ width: '150px', position: 'relative', zIndex: 10 }}></img>
        <div className='d-flex align-items-center justify-content-center gap-3' style={{ position: 'relative', zIndex: '100', width: '100%' }}>
          <hr style={{ position: 'relative', zIndex: '100', border: '1px solid white', width: '10%' }} />
          <div className='overlay-text' style={{ width: 'fit-content' }} >Botaş Pipeline Yönetim Sistemi</div>
          <hr style={{ position: 'relative', zIndex: '100', border: '1px solid white', width: '10%' }} />
        </div>
        <p className='text-center text-white' style={{ position: 'relative', zIndex: 10, fontWeight: 'bold' }}>2024</p>
      </div>

      <div className='row flex justify-content-center px-5'>

        {logos.map(val =>
          <div className='card'>
            <div className='card-content' style={{ background: val.color }}>
              <img src={val.logo} />
              <p className='card-text'> Botaş modül 2</p>
            </div>
            <div className='card-overlay-content'>
              <div className='card-overlay'></div>
              <a className='btn btn-danger btn-sm'>Linke Git</a>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}

export default App;
