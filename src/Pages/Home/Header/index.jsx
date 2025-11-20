import React, { useEffect, useState } from 'react'
import { Navigation, Div } from './StyledHeader'
import { Button, Stack, Box } from '@mui/material'
import Logo from '../../../assets/Logo/Logo'
import { Link } from 'react-router-dom'
// import SideBar from '../../../Components/SideBar'


function Header() {
  // const [currentWidth, setCurrentWidth] = useState('55px')
  // const [currentHeight, setCurrentHeight] = useState('55px')
  const [currentColor, setcurrentColor] = useState('trasnparent')
  const [lastTranslate, setlastTranslate] = useState('translateY(0)')
  const [lastScroll, setlastScroll] = useState(0)
  // const [navBtn, setNavBtn] = useState(null)
  const [sideBarOpen, setSideBarOpen] = useState(false)

  // const handleClick = (value) => {
  //   setNavBtn(value)
  //   setSideBarOpen(true)
  //   console.log(value)
  // }
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY

      if (currentScroll > lastScroll && currentScroll > 100) {
        setlastTranslate('translateY(-100%)')
      } else if (currentScroll === 0) {
        setcurrentColor('trasnparent')
        setlastTranslate('translateY(0)')
      } else {
        setcurrentColor('secondary.main')
        setlastTranslate('translateY(0)')
      }
      setlastScroll(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)

    if(sideBarOpen){
      console.log('hurry!')
    }
    return () => {
      window.removeEventListener('scroll', handleScroll)
      // setSideBarOpen(false)
    }
  }, [lastScroll, sideBarOpen])

  return (
    <>
      {/* <SideBar currentName={navBtn} isOpen={sideBarOpen} isClose={ () => setSideBarOpen(false)}/> */}
      <Navigation sx={{
        backgroundColor: currentColor,
        transition: 'all ease-in-out 0.3s',
        transform: lastTranslate,
      }} className='navigation'>
        <Box sx={{ display: { md: 'none' }, margin: '0 1rem' }}>Menu</Box>
        <Box sx={{
          marginLeft: { md: '1rem', xs: '0' },
          position: { xs: 'absolute', md: 'unset' },
          left: {xs:'50%', md: '0'},
          transform: {xs:'translateX(-50%)', md: 'none'}
        }}><Logo currentColor='#fff' currentHeight={'55px'} currentWidth={'55px'} /></Box>
        <Stack direction={'row'} spacing={3} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button variant={'text'} onClick={() => handleClick('racing')} className='text' sx={{ backgroundColor: 'transparent', color: '#fff' }}>racing</Button>
          <Button variant={'text'} onClick={() => handleClick('sports cars')} className='text' sx={{ backgroundColor: 'transparent', color: '#fff' }}>sports cars</Button>
          <Button variant={'text'} onClick={() => handleClick('collections')} className='text' sx={{ backgroundColor: 'transparent', color: '#fff' }}>collections</Button>
          <Button variant={'text'} onClick={() => handleClick('experiences')} className='text' sx={{ backgroundColor: 'transparent', color: '#fff' }}>experiences</Button>
          <Button variant={'text'} onClick={() => handleClick('about us')} className='text' sx={{ backgroundColor: 'transparent', color: '#fff' }}>about us</Button>
        </Stack>
      </Navigation>
    </>
  )
}

export default Header