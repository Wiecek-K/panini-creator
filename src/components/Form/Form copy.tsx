import { useState } from 'react'
import styles from './Form.module.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { useForm, SubmitHandler } from 'react-hook-form'
interface FormProps {
  isOpened?: boolean
  endFormFnc: () => void
}
interface CarouselFormState {
  inputValues: string[]
  currentIndex: number
}

type Inputs = {
  paniniName: string
  napkins: boolean
  cutlery: boolean
  vegetables: { [key: string]: boolean }
}

export const Form = ({ isOpened, endFormFnc }: FormProps) => {
  const [formData, setFormData] = useState<CarouselFormState>({
    currentIndex: 0,
    inputValues: ['FULL GRAIN', 'WHEAT'],
  })

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
  }

  const settings = {
    arrows: true,
    className: styles.slider,
    dots: false,
    draggable: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className={`${styles.formContainer} ${isOpened ? styles.open : ''}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formHeaderBar}>
          <h1>Panini Creator</h1>
          <button> Randomize Panini</button>
        </div>
        <div className={styles.formCard}>
          <div>
            <h3>Bread</h3>
            <Slider {...settings}>
              {formData.inputValues.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </Slider>
          </div>
          <div>
            <h3>Cheese</h3>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            <h3>Vegetables</h3>
            <div>
              <input
                type="checkbox"
                id="salad"
                {...register('vegetables.salad')}
              />
              <label htmlFor="salad">Salad</label>
              <input
                type="checkbox"
                id="tomato"
                {...register('vegetables.tomato')}
              />
              <label htmlFor="tomato">Tomato</label>
              <input
                type="checkbox"
                id="onion"
                {...register('vegetables.onion')}
              />
              <label htmlFor="onion">Onion</label>
              <input
                type="checkbox"
                id="onion"
                {...register('vegetables.onion')}
              />
              <label htmlFor="obergine">Obergine</label>
              <input
                type="checkbox"
                id="obergine"
                {...register('vegetables.obergine')}
              />
              <label htmlFor="onion">Onion</label>
              <input
                type="checkbox"
                id="onion"
                {...register('vegetables.onion')}
              />
              <label htmlFor="onion">Onion</label>
            </div>
          </div>
        </div>
        <div className={styles.formCard}></div>
        <div className={styles.formCard}>
          <h2>FINALIZE ORDER</h2>
          <div>
            <h3>Name panini</h3>
            <input
              placeholder="eg. Club Panini"
              {...register('paniniName', { required: true, maxLength: 30 })}
            />
          </div>
          <div>
            <h3>Cutlery</h3>
            <input type="checkbox" {...register('cutlery')} />
          </div>
          <div>
            <h3>Napkins</h3>
            <input type="checkbox" {...register('napkins')} />
          </div>
        </div>
        <button type="submit">PLACE ORDER</button>
        <button type="reset">START AGAIN</button>
      </form>
    </div>
  )
}
