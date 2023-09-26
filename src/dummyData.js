// NAV MENU
import home from '/src/assets/images/home-icon.svg'
import watchlist from '/src/assets/images/watchlist-icon.svg'
import original from '/src/assets/images/original-icon.svg'
import movies from '/src/assets/images/movie-icon.svg'
import series from '/src/assets/images/series-icon.svg'

// SLIDER IMAGE
import badag from '/src/assets/images/slider-badag.jpg'
import badging from '/src/assets/images/slider-badging.jpg'
import scale from '/src/assets/images/slider-scale.jpg'
import scales from '/src/assets/images/slider-scales.jpg'

// SLIDER VIEWER
import disneyImg from '/src/assets/images/viewers-disney.png'
import marvelImg from '/src/assets/images/viewers-marvel.png'
import nationalImg from '/src/assets/images/viewers-national.png'
import pixarImg from '/src/assets/images/viewers-pixar.png'
import starwarsImg from '/src/assets/images/viewers-starwars.png'
import disneyVid from '/src/assets/videos/disney.mp4'
import marvelVid from '/src/assets/videos/marvel.mp4'
import nationalVid from '/src/assets/videos/national-geographic.mp4'
import pixarVid from '/src/assets/videos/pixar.mp4'
import starwarsVid from '/src/assets/videos/star-wars.mp4'

export const NAV_MENU = [
  { name: 'HOME', path: home },
  { name: 'WATCHLIST', path: watchlist },
  { name: 'ORIGINALS', path: original },
  { name: 'MOVIES', path: movies },
  { name: 'SERIES', path: series },
]

export const SLIDER_IMG = [
  { name: 'badag', path: badag },
  { name: 'badging', path: badging },
  { name: 'scale', path: scale },
  { name: 'scales', path: scales },
]

export const SLIDER_VIEWERS = [
  { name: 'disney', pathImage: disneyImg, pathVideo: disneyVid },
  { name: 'marvel', pathImage: marvelImg, pathVideo: marvelVid },
  { name: 'national', pathImage: nationalImg, pathVideo: nationalVid },
  { name: 'pixar', pathImage: pixarImg, pathVideo: pixarVid },
  { name: 'starwars', pathImage: starwarsImg, pathVideo: starwarsVid },
]
