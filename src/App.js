import React, { useState, useEffect } from 'react'
import axios from 'axios'

const picuri = 'https://emagweb.github.io/sdev/icons/'

const iconuri = 'https://skillicons.dev/icons?i='

const App = () => {

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [vacancies, setVacancies] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [currentItem, setCurrentItem] = useState(-1)
  const [isShow, setIsShow] = useState(true)
  const [isPersonShow, setIsPersonShow] = useState(false)

  const getFirst = () => {
    const elements = []
    if (currentPage <= 3) {
      for (let i = 1; i <= 3; i++) {
        elements.push(
          <span className="v-pages">
            <button
              key={i}
              className={currentPage !== i ? '' : 'noactive'}
              onClick={() => currentPage !== i ?
                (setCurrentPage(i),
                  fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
              }>{i < 10 ? `0${i}` : i}
            </button>
          </span>
        )
      }
    }
    if (currentPage > 3 && currentPage < totalPages - 1) {
      for (let i = 1; i < 3; i++) {
        elements.push(
          <span className="v-pages">
            <button
              key={i}
              className={currentPage !== i ? '' : 'noactive'}
              onClick={() => currentPage !== i ?
                (setCurrentPage(i),
                  fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
              }>{i < 10 ? `0${i}` : i}
            </button>
          </span>
        )
      }
    }
    return elements
  };

  const getPages = () => {
    const elements = []

    if (currentPage > 3 && currentPage < totalPages - 1) {
      for (let i = currentPage - 1; i < currentPage + 2; i++) {
        elements.push(
          <span className="v-pages">
            <button
              key={i}
              className={currentPage !== i ? '' : 'noactive'}
              onClick={() => currentPage !== i ?
                (setCurrentPage(i),
                  fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
              }>{i < 10 ? `0${i}` : i}
            </button>
          </span>
        )
      }
    } else {
      if (currentPage > totalPages - 3) {
        for (let i = totalPages - 3; i < totalPages - 1; i++) {
          elements.push(
            <span className="v-pages">
              <button
                key={i}
                className={currentPage !== i ? '' : 'noactive'}
                onClick={() => currentPage !== i ?
                  (setCurrentPage(i),
                    fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
                }>{i < 10 ? `0${i}` : i}
              </button>
            </span>
          )
        }
      }
    }
    return elements
  };

  const getLast = () => {
    const elements = []
    for (let i = totalPages - 1; i <= totalPages; i++) {
      elements.push(
        <span className="v-pages">
          <button
            key={i}
            className={currentPage !== i ? '' : 'noactive'}
            onClick={() => currentPage !== i ?
              (setCurrentPage(i),
                fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
            }>{i < 10 ? `0${i}` : i}
          </button>
        </span>
      )
    }
    return elements
  };

  function fetchVacancies() {
    return function (dispatch) {
      dispatch(vacancies())
      axios.get(`https://backoffice.pogovorimo.com.ua/api/v1/applicant/?page=${currentPage}`)
        .then((res) => {
          dispatch(res.data.results)
          setVacancies(res.data.results)
        })
    }
  }

  useEffect(() => {
    const getVacancies = async () => {
      const res = await axios.get(`https://backoffice.pogovorimo.com.ua/api/v1/applicant/?page=${currentPage}`)
      setVacancies(res.data.results)
      setTotalPages(res.data.total_pages)
      setCurrentPage(res.data.current_page)
    }
    getVacancies()
  }, [currentPage])


  return (
    <section className="page cards">
      <div className="features">
        <div className="feature-row">
          {isShow ? vacancies.map((item, index) => (
            <div
              className="feature"
              key={index}
              onClick={() => {
                setCurrentItem(item.id)
                setIsShow(!isShow)
                setIsPersonShow(!isPersonShow)
              }}>
              <div>
                <h3 className="feature-title">{item.position.length > 21 ? item.position.slice(0, 21) + ' ...' : item.position}</h3>
                <div className="flex-row">
                  <img className="flex-pic" src={picuri + (!item.business_area[0] ? 'software' : item.business_area) + '.svg'} alt={item.business_area} />
                  <div className="flex-right">
                    <p className="bg-yellow">{item.general_experience + ' years'}</p>
                    <p className="salary">${item.salary}/hour</p>
                  </div>
                </div>
                <div className="skills-icons">
                  <h3 className="dark">Expert In</h3>
                  <p className="skillsets">
                    <img src={iconuri + item.technologies.slice(0, 6)} className="skill-icon" alt={'skills'} />
                  </p>
                </div>
              </div>
              <div>
                <div className="feature-desc">
                  <p className="dark m-20">{item.summary}</p>
                </div>
              </div>
            </div>
          )) : <></>}
        </div>
        {isShow ?
          (<div className='flex-center pagination-nav'>
            <button
              className={currentPage > 1 ? 'navs' : 'noactive navs'}
              onClick={() => currentPage > 1 ?
                (setCurrentPage(currentPage - 1),
                  fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
              }>Prev</button>
            {getFirst()}
            {currentPage > 4 ? <button className={'dots'}>...</button> : <></>}
            {getPages()}
            {currentPage < totalPages - 3 ? <button className={'dots'}>...</button> : <></>}
            {getLast()}
            <button
              className={currentPage < totalPages ? 'navs' : 'noactive navs'}
              onClick={() => currentPage < totalPages ?
                (setCurrentPage(currentPage + 1),
                  fetchVacancies(), goToTop()) : setCurrentPage(currentPage)
              }>Next</button>
          </div>) : <></>
        }

        {isPersonShow ? vacancies.filter(item => item.id === currentItem).map(filteredItem => (
          <div className="features">
            <h3 className="single_v_title">{filteredItem.position}</h3>
            <div className="single_v_row">
              <img
                className="single_v_pic"
                src={picuri + (!filteredItem.business_area[0] ? 'software' : filteredItem.business_area) + '.svg'}
                alt={filteredItem.business_area}
              />
              <div className="single_v_right">
                <p className="single_v_text">{filteredItem.summary}</p>

                <div ClassName="wide-btn" style={{ margin: '-10px 0 30px', display: 'flex', width: '100%' }}>
                  <button
                    style={{ width: 280, margin: 0, backgroundColor: '#1C253D', color: '#fff', border: '2px solid #1C253D !important' }}
                    onClick={() => {
                      setIsShow(true)
                      setIsPersonShow(false)
                    }
                    }>
                    Back to find employee
                  </button>
                  <a className="button-dark"
                    style={{ width: 200, margin: '0 25px', color: '#E4C417' }} href="https://upcod.typeform.com/to/BqR60b20" target="_blank" rel="noreferrer">Get this employee</a>
                </div>
              </div>
            </div>
            <div className='vacancy-overview'>
              <div className="vacancy-box blue">
                <div className="vacancy-left">
                  <p>Category</p>
                  <p>Experience</p>
                  <p>Salary</p>
                </div>
                <div className="vacancy-right">
                  <p>{filteredItem.business_area}</p>
                  <p>{filteredItem.general_experience + ' years'}</p>
                  <p>${filteredItem.salary}/hour</p>
                </div>
              </div>
              <div className="vacancy-box white">
                <div>
                  <h3 className="vacancy-title">Use technologies</h3>
                  <img src={iconuri + filteredItem.technologies + '&perline=6'} className="skill-icon" alt={'skills'} />
                </div>
              </div>
            </div>
            <div className="timeline">
              <h3 className="timeline-name">Work Experience</h3>
              {
                filteredItem.work_experience.map((timeline, index) => (
                  <div className='timeline-row' key={index}>
                    <h4 className='timeline-date'><span>{timeline.begin}</span> - <span>{timeline.end}</span></h4>
                    <div className='timeline-content'>
                      <h4 className='timeline-title'><span style={{ color: '#fff' }}>{timeline.position}</span></h4>
                      <p className='timeline-text'>{timeline.description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="flex-center" style={{ marginTop: 80 }}>
              <button
                className="button-get yellow"
                onClick={() => {
                  setIsShow(true)
                  setIsPersonShow(false)
                }
                }>Back to find employee</button>
              <a className="button-get yellow" href="https://upcod.typeform.com/to/BqR60b20" target="_blank" rel="noreferrer">Get this employee</a>
            </div>
          </div>
        )) : <></>
        }
      </div>
    </section>
  )
}

export default App
