import { useState } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { BsSearch } from 'react-icons/bs'
import { CgMathPlus } from 'react-icons/cg'

function Search() {

  const [code, setCode] = useState('')

  const handleCode = (event) => {
    const {value} = event.target
    
    setCode(value)
  }

  const createCode = (event) => {
    event.preventDefault()

    axios.post("http://localhost:3333/create")
      .then(response => {
        const {data} = response.data
        console.log(data)
        // setCode(data.code)
      })
      .catch(error => console.log('error', error))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    axios.post("http://localhost:3333/findCode", code)
      .then(response => {
        console.log('response =>', response)
       // window.location.href = '/found'
      })
      .catch(error => console.log('error', error))
  }

  return (
    <>
      <Header />
      <article className=''>
        <button className='btn btn-info' onClick={createCode}>
          <CgMathPlus style={{backgroundColor: '#0dcaf0', color: '#fff', marginRight: '0.5rem'}}/>
          Gerar código
        </button>
      </article>
      <div className='d-flex align-items-center justify-content-center w-100 h-100'>
        <main className='w-50'>
          <form action="submit" onSubmit={(event) => handleSubmit(event)}>
            <div className="form-group">
              <label htmlFor="code">Buscar código:</label>
              <input
                type="text"
                className="form-control mw-50"
                id="code"
                aria-describedby="codeInfo"
                value={code}
                onChange={event => handleCode(event)}
              />
              <small id="codeInfo" className="form-text text-muted">Digite seu código de localização no campo acima.</small>
            </div>
            <button type="submit" className='btn btn-primary mt-3'>
              <BsSearch style={{backgroundColor: '#0d6efd', color: '#fff', marginRight: '0.5rem'}}/>
              Localizar
            </button>
          </form>
        </main>
      </div>
    </>
  )
}

export { Search }