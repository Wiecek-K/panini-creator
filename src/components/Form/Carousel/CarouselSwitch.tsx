import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick.css'
import styles from './CarouselSwitch.module.css'

import Slider from 'react-slick'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'

export interface CarouselSwitchProps {
  name: string
  options: string[]
  icons?: boolean
}

export const CarouselSwitch = ({
  name,
  options,
  icons = false,
}: CarouselSwitchProps) => {
  const { register, setValue } = useFormContext()
  useEffect(() => {
    setValue(name, options[0])
  }, [name, options, setValue])

  const settings = {
    arrows: true,
    className: styles.slider,
    dots: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentSlide: number) =>
      setValue(name, options[currentSlide]),
  }

  return (
    <>
      <input type="hidden" {...register(name)} />
      <Slider {...settings}>
        {options.map((value, index) => (
          <div key={index}>
            <div className={styles.sliderOption}>
              {icons && (
                <img
                  src={`/icons/Icon=${capitalizeFirstLetter(value)}.svg`}
                  className={styles.icon}
                />
              )}
              {value}
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
