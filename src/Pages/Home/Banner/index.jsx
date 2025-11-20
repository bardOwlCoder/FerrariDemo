import React, { useEffect, useRef, useState } from 'react'
import fetchData from '../../../Utils/FetchData'
import 'swiper/css'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SlideIn, TitleBox } from './styledBanner'
import { Autoplay, Pagination } from 'swiper/modules'
import { Typography, Box } from '@mui/material'
import 'swiper/css/pagination'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import useViewportHeight from '../../../Hooks/useViewportHeight'
gsap.registerPlugin(useGSAP, SplitText)


function Banner() {
    const [heroes, setHeroes] = useState([])
    const [loading, setLoading] = useState(false)
    const slideRef = useRef(null)
    const vh = useViewportHeight();
    useEffect(() => {
        (async () => {
            const res = await fetchData('/hero-banners?populate=*')
            if (res.data) {
                setHeroes(res.data)
            } else {
                setLoading(true)
            }
        })()
    }, [])



    const animateTitles = (activeSlide) => {
        const title = activeSlide.querySelector('.titleMain')
        const subTitle = activeSlide.querySelector('.subTitle')
        const discoverBtn = activeSlide.querySelector('.discoverBtn')

        if (title) {
            const splitTitle = new SplitText(title, { type: 'words, chars' })
            gsap.from(splitTitle.words, {
                duration: 0.8,
                y: 40,
                opacity: 0,
                ease: 'power3.out',
                stagger: 0.05,
                rotate: 40
            })
        }

        if (subTitle) {
            const splitSub = new SplitText(subTitle, { type: 'words, chars' })
            gsap.from(splitSub.words, {
                duration: 1,
                y: 40,
                opacity: 0,
                ease: 'power3.out',
                stagger: 0.05,
                rotate: 40
            })
        }

        if (discoverBtn) {
            gsap.fromTo(discoverBtn, { opacity: 0, },
                {
                    opacity: 1,
                    duration: 0.8,
                    delay: 0.3
                })

        }
    }


    const handleSlideChange = (swiper) => {
        document.querySelectorAll('.titleMain, .subTitle, .discoverBtn').forEach(el => {
            el.classList.remove('active')
        })

        const activeSlide = swiper.slides[swiper.activeIndex]
        const activeTitle = activeSlide.querySelector('.titleMain')
        const activeSub = activeSlide.querySelector('.subTitle')
        const activeDiscover = activeSlide.querySelector('.discoverBtn')

        if (activeTitle && activeSub && activeDiscover) {
            activeTitle.classList.add('active')
            activeSub.classList.add('active')
            activeDiscover.classList.add('active')
            animateTitles(activeSlide) // فقط همون اسلاید فعال
        }
    }
    const slides = heroes?.map(i => {
        return (
            <SwiperSlide key={i.order} ref={slideRef}>
                <SlideIn position={'relative'} sx={{
                    height: `calc(${vh}px * 100)`
                }}>
                    <TitleBox position={'absolute'}>
                        <Typography className='subTitle' variant='h4' sx={{ fontSize: { xs: '18px', md: '20px' }, fontWeight: 'bold', fontFamily: 'notosans-bold', textTransform: 'uppercase', margin: '1.5rem 0', }}>
                            {i.subtitle}
                        </Typography>
                        <Typography className='titleMain' variant='h2' sx={{ fontSize: { xs: '34px', md: '45px' }, fontFamily: 'notosans-bold', textTransform: 'uppercase' }}>
                            {i.title}
                        </Typography>
                        <Typography className='discoverBtn' component='a' sx={{
                            textTransform: 'uppercase'
                            , display: 'inline-block',
                            marginTop: '1.8rem',
                            cursor: 'pointer',
                            transition: 'all ease 0.3s',
                            '&:hover': {
                                color: 'primary.main'
                            }
                        }} >
                            {i.etc_text}
                        </Typography>
                    </TitleBox>
                    {i.video?.map(v => (
                        <video autoPlay loop muted key={v.id} style={{ width: '100%', height: '100%', objectFit: 'cover', zIndex: '0', pointerEvents: 'none' }} >
                            <source src={`${import.meta.env.VITE_BASE_URL}${v.url}`} type={v.mime} />
                        </video>
                    ))}
                </SlideIn>
            </SwiperSlide>
        )
    })

    return (
        <>
            {loading ? <p>Loading</p> :
                <Swiper
                pagination={{ clickable: true, }}
                autoplay={{ delay: 10000 }}
                // disableOnInteraction={false}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
                onSlideChange={handleSlideChange}
                style={{
                    height: `calc(${vh}px * 100)`
                }}
            >
                {slides}
            </Swiper>}
        </>


    )
}

export default Banner