import { useFormContext } from 'react-hook-form'
import { useEffect, useRef } from 'react'

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
  reset?: boolean
}

export const CarouselSwitch = ({
  name,
  sectionName = '',
  options,
  initialIndex,
  icons = false,
  reset,
}: CarouselSwitchProps) => {
  initialIndex
    ? (initialIndex = validateInitialIndex(initialIndex, options))
    : null

  const componentName = sectionName ? `${sectionName}.${name}` : name

  const { register, setValue, getValues } = useFormContext()

  const sliderRef = useRef<Slider>(null)

  useEffect(() => {
    // setValue(componentName, options[initialIndex])
    sliderRef.current?.slickGoTo(
      options.findIndex((option) => option === getValues(componentName))
    )
  }, [name, options, setValue, sectionName, reset])

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
      <Slider ref={sliderRef} {...settings}>
        {options.map((value, index) => (
          <div key={index}>
            <div className={styles.sliderOption}>
              {icons && (
                <img
                  src={`/icons/Icon=${capitalizeFirstLetter(value)}.svg`}
                  className={styles.icon}
                />
              )}
              <span className={styles.text}>{value}</span>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
