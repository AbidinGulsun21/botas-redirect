import React from 'react'

export default function Trading() {
    const logos = [
        { logo: 'botas-logo.png', text: 'EBYS', color: '#FF52C4' },
        { logo: 'botas-logo.png', text: 'Dosya Sunucusu', color: '#FF52C4' },
        { logo: 'botas-logo.png', text: 'ERP', color: '#FF52C4' },
        { logo: 'trading.png', text: 'Botaş Trading', color: '#526CFF' },
        { logo: 'bassnet.jpg', text: 'BASSnet', color: '#FF52C4' },
        { logo: 'botas-logo.png', text: 'Botaş Kurumsal Web Sayfası', color: '#FF52C4' },
    ]
    return (
        <>
            <div className='d-flex flex-column align-items-center' style={{ position: 'relative', zIndex: '100', width: '100%' }}>
                <img src='trading.png' className='img-fluid' style={{ width: '150px' }} alt='botaş-app'></img>
                <div className='d-flex align-items-center justify-content-center gap-3 w-100' >
                    <hr style={{ border: '1px solid #fff', width: '10%', opacity: 1 }} />
                    <div className='overlay-text' style={{ width: 'fit-content' }} >Botaş Trading Yönetim Sistemi</div>
                    <hr style={{ border: '1px solid #fff', width: '10%', opacity: 1 }} />
                </div>
                <p className='text-center text-white' style={{ fontWeight: 'bold' }}>2024</p>
            </div>

            <div className='row w-100 justify-content-center' style={{ zIndex: 30 }}>
                {logos.map(val =>
                    <div className="col-2 d-flex flex-column gap-2" style={{ justifyContent: 'space-between' }}>
                        <img src={val.logo} alt='botaş-app' className='card-img my-auto' />
                        <p className="text-white text-center firma-font h-25">{val.text}</p>
                    </div>
                )}
            </div>
        </>
    )
}
