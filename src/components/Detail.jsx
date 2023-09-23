import React, { useEffect, useState } from 'react'
import db from '../firebase'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import Loading from './Loading'

const Detail = () => {

  const {id} = useParams()
  const [detailData, setDetailData] = useState({})
  const [isLoading, setisLoading]= useState(true)
  
  useEffect(() => {
    getDataById();
    console.log(detailData.title)
  }, [id])

  const getDataById = async() => {
    try {
      const docRef = doc(db, 'movies', id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setTimeout(() => {
          setDetailData(docSnap.data())
          setisLoading(false);
        }, 1000);
      } else {
        console.log('data not found')
      }
    } catch(error) {
      console.log('Error saat mengambil dokumen: ',error)
    }
  }

  return (
    <div>
      {isLoading ? (
        <Loading/>
      ) : (
          <div className='relative block overflow-hidden top-[70px] min-h-[calc(100vh-70px)] px-5 md:px-32'>
            <div className='absolute right-0 left-0 top-0 z-[-1] opacity-80 h-full'>
              <img src={detailData.backgroundImg} alt={detailData.title} className='w-full h-full' />
            </div>
            <div className='flex items-end h-[220px] md:h-[500px]'>
              <img src={detailData.titleImg} alt={detailData.title} className='w-1/2 md:max-w-[500px]' />
            </div>
            <div>
              <div className='flex gap-3 pt-5'>
                <div className= 'border-2 py-2 px-5 flex items-center gap-1 rounded-lg bg-white text-black'>
                  <i className='fa-solid fa-play'></i>
                  <span>Play</span>
                </div>
                <div className='border-2 py-2 px-5 flex items-center gap-1 rounded-lg bg-black bg-opacity-20'>
                  <i className='fa-solid fa-play'></i>
                  <span>Trailer</span>
                </div>
                <div className='border-2 rounded-full items-center flex bg-black bg-opacity-90'>
                  <i className='fa-solid fa-plus w-10 h-5 flex justify-center'></i>
                </div>
                <div className='border-2 rounded-full items-center flex bg-black bg-opacity-90'>
                  <i className='fa-solid fa-user-group w-10 h-5 flex justify-center'></i>
                </div>
              </div>
              <div className='pt-4'>{ detailData.subTitle}</div>
              <div className='pt-5 md:w-[700px]'>{ detailData.description}</div>
            </div>
          </div>
      )}
    </div>
  )
}

export default Detail