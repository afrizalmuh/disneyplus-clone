import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viewers'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName } from '../features/user/userSlice'
import { setMovies } from '../features/movie/movieSlice'
import Recommends from './Recommends'
import Disney from './Disney'
import Originals from './Originals'
import Trendings from './Trendings'

const Home = () => {
  
  const db = getFirestore();
  const moviesRef = collection(db, 'movies');
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName)

  let recommends = []
  let newDisneys = []
  let originals = []
  let trendings = []

  useEffect(() => {
    getDocs(moviesRef).then((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case 'recommend':
            recommends = [...recommends, ({ id: doc.id, ...doc.data() })]
            break;
          case 'new':
            newDisneys = [...newDisneys, ({ id: doc.id, ...doc.data() })]
            break;
          case 'original':
            originals = [...originals, ({ id: doc.id, ...doc.data() })]
            break;
          case 'trending':
            trendings = [...trendings, ({ id: doc.id, ...doc.data() })]
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trendings
        })
      );

    }, [userName]);
  })

  return (
    <div className="relative overflow-x-hidden block top-[70px] px-5 md:px-20 bg-cover bg-[url('/public/images/home-background.png')] bg-no-repeat">
      <ImageSlider />
      <Viewers />
      <Recommends />
      <Disney />
      <Originals />
      <Trendings />
    </div>
  )
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home