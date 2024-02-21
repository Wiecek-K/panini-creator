import { SelectHTMLAttributes, useEffect } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import ReactSelect, {
  StylesConfig,
  components,
  DropdownIndicatorProps,
} from 'react-select'
import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  options: string[]
}

export const Select = ({ name, options }: SelectProps) => {
  const optionsObjectsArray = options.map((option) => ({
    label: capitalizeFirstLetter(option),
    value: option,
  }))

  const { control, setValue } = useFormContext()
  useEffect(() => {
    setValue(name, optionsObjectsArray[0])
  }, [name, optionsObjectsArray, setValue])

  const selectStyles: StylesConfig = {
    container: (styles) => {
      return {
        ...styles,
      }
    },
    control: (styles, { menuIsOpen }) => {
      return {
        ...styles,
        backgroundColor: 'white',
        width: '250px',
        height: '35px',
        border: '0.5px solid black',
        borderRadius: '0',
        boxShadow: 'none',

        ':hover': { border: '0.5px solid black' },
        '.mySelect': {
          '&__dropdown-indicator': {
            transform: menuIsOpen ? 'rotate(180deg)' : '',
            transition: 'transform 200ms', // <--- Color of your choice
          },
        },
      }
    },
    dropdownIndicator(styles) {
      return { ...styles, padding: 0 }
    },
    indicatorsContainer: (styles) => {
      return { ...styles, position: 'absolute', right: 0, padding: '14px' }
    },

    indicatorSeparator: (styles) => {
      return { ...styles, display: 'none' }
    },
    menu: (styles) => {
      return {
        ...styles,
        margin: 0,
        borderRadius: 0,
      }
    },
    menuList: (styles) => {
      return {
        ...styles,
        border: '0.5px solid black',
        borderBottom: '0',
        borderTop: '0',
        padding: 0,
      }
    },
    option: (styles, { isFocused, isSelected }) => {
      return {
        ...styles,
        display: isSelected ? 'none' : 'block',
        backgroundColor: isFocused ? '#FBFBFB ' : 'inherit',
        color: 'black',
        borderBottom: '0.5px solid black',
      }
    },
  }

  const DropdownIndicator: any = ({
    ...props
  }: DropdownIndicatorProps<typeof DropdownIndicator>) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/public/icons/Vector 15.svg" />
      </components.DropdownIndicator>
    )
  }
  return name ? (
    <Controller
      name={name}
      control={control}
      defaultValue={optionsObjectsArray[0]}
      render={({ field: { onChange, value, name } }) => (
        <ReactSelect
          components={{ DropdownIndicator }}
          defaultValue={value}
          onChange={onChange}
          value={value}
          name={name}
          options={optionsObjectsArray}
          styles={selectStyles}
          isSearchable={false}
          classNamePrefix="mySelect"
        />
      )}
    />
  ) : null
}
