import {Header} from '../../components/Header'
import { IoArrowBack } from 'react-icons/io5'
import { FaTruckMoving } from 'react-icons/fa'
import { BiHome } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'

function Response() {
  const renderPoints = () => {
    const divs = []

    for (let i = 0; i < 5; i++) {
      divs.push(<div className='pointsMini' />)
    }
    return divs
  }

  const handleBack = () => {
    window.history.back()
  }
  return (
    <>
      <Header />
      <article className='d-flex align-self-start'>
        <button className='btn btn-info' onClick={handleBack}>
          <IoArrowBack style={{backgroundColor: '#0dcaf0', color: '#fff', marginRight: '0.5rem'}}/>
          Voltar
        </button>
      </article>
      <div className='d-flex align-items-center justify-content-center w-100 h-100'>
        <main className='w-50'>
          <div className="tempLine d-flex justify-content-center align-items-center">
            <div className='containerPoints d-flex flex-column align-items-center'>
              <div className="pointUp" />
              <MdOutlineEmail color='rgb(241, 220, 98)' size={"24px"}/>
            </div>
            {renderPoints()}
            <div className='containerPoints d-flex flex-column align-items-center'>
              <div className="pointUp" />
              <FaTruckMoving color='rgb(0, 0, 255)' size={"24px"}/>
            </div>
            {renderPoints()}
            <div className='containerPoints d-flex flex-column align-items-center'>
              <div className="pointUp" />
              <BiHome color='rgb(107, 255, 107)' size={"24px"}/>
            </div>
          </div>
          <div className="processInfo">
            <div className="processDetails">
              <div className="title">Objeto Postada.</div>
              <div className="details">Objeto encontra-se em processo de separação para envio.</div>
              <div className="date">27/01/2017 às 12:45 hs</div>
            </div>
            <div className="processDetails">
              <div className="title">Objeto em trânsito.</div>
              <div className="details">Objeto está a caminho de sua residência.</div>
              <div className="date">28/01/2017 às 12:45 hs</div>
            </div>
            <div className="processDetails">
              <div className="title">Entregue.</div>
              <div className="details">Objeto já entregue ao destinatário.</div>
              <div className="date">10/02/2017 às 12:45 hs</div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export {Response}