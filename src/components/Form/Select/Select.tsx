import { SelectHTMLAttributes, useEffect } from 'react'
import { useFormContext, Controller } from 'react-hook-form'
import ReactSelect, {
  StylesConfig,
  components,
  DropdownIndicatorProps,
} from 'react-select'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  sectionName?: string
  options: string[]
}

export const Select = ({ name, sectionName = '', options }: SelectProps) => {
  const optionsObjectsArray = options.map((option) => ({
    label: option.toUpperCase(),
    value: option,
  }))
  const componentName = sectionName ? `${sectionName}.${name}` : name

  const { control, setValue, getValues } = useFormContext()

  useEffect(() => {
    const fieldValue = getValues(componentName)

    options.find((option) => option === fieldValue)
      ? null
      : setValue(componentName, optionsObjectsArray[0].value)
  })

  const selectStyles: StylesConfig = {
    container: (styles) => {
      return {
        ...styles,
        minHeight: '30px',
        height: '35px',
        fontFamily: 'Oxygen Mono',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: '0em',
        textAlign: 'center',
      }
    },
    control: (styles, { menuIsOpen }) => {
      return {
        ...styles,
        backgroundColor: 'white',
        width: '250px',
        minHeight: '30px',
        height: '35px',
        border: '0.5px solid black',
        borderRadius: '0',
        boxShadow: 'none',

        ':hover': { border: '0.5px solid black' },
        '.mySelect': {
          '&__dropdown-indicator': {
            transform: menuIsOpen ? 'rotate(180deg)' : '',
            transition: 'transform 200ms',
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
        zIndex: 5,
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DropdownIndicator: any = ({
    ...props
  }: DropdownIndicatorProps<typeof DropdownIndicator>) => {
    return (
      <components.DropdownIndicator {...props}>
        <img src="/icons/Vector 15.svg" />
      </components.DropdownIndicator>
    )
  }
  return (
    <Controller
      name={componentName}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <ReactSelect
          components={{ DropdownIndicator }}
          onChange={(value) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onChange(value.value)
          }}
          value={optionsObjectsArray.find((option) => option.value === value)}
          name={name}
          options={optionsObjectsArray}
          styles={selectStyles}
          isSearchable={false}
          classNamePrefix="mySelect"
        />
      )}
    />
  )
}
