import { useFormContext } from 'react-hook-form'
import { useEffect } from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './slick.css'
import styles from './CarouselSwitch.module.css'

import Slider from 'react-slick'

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'
import { validateInitialIndex } from '../../../utils/validateInitialIndex'

export interface CarouselSwitchProps {
  name: string
  options: string[]
  icons?: boolean
  sectionName?: string
  initialIndex?: number
}

export const CarouselSwitch = ({
  name,
  sectionName = '',
  options,
  initialIndex = 0,
  icons = false,
}: CarouselSwitchProps) => {
  initialIndex = validateInitialIndex(initialIndex, options)
  const componentName = sectionName ? `${sectionName}.${name}` : name

  const { register, setValue } = useFormContext()
  useEffect(() => {
    setValue(componentName, options[initialIndex])
  }, [name, options, setValue, sectionName])

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
      setValue(componentName, options[currentSlide]),
    initialSlide: initialIndex,
  }

  return (
    <>
      <input type="hidden" {...register(componentName)} />
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
