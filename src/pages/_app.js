import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
export default function App({ Component, pageProps }) {
  const [images, setImages] = useState();
  const [searchedImage, setSearchedImage] = useState()
  const fetchImages = async (authtoken) => {
    const response = await fetch('/api/fetchimages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ authtoken: authtoken })
    })
    const data = await response.json();
    if (data.success) {
      setImages(data.image);
      setSearchedImage(data.image)
    }
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem("authtoken")) {
        fetchImages(localStorage.getItem('authtoken'));
      } else {
      }
    }
  }, [])
  return <>
  <Navbar images={images} searchedImage={searchedImage} setSearchedImage={setSearchedImage}  />
  <Component images={images}  a={searchedImage} setSearchedImage={setSearchedImage}  {...pageProps} />
  </>
}
