import { Input } from 'components/ui/Input'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'
import { REGEX } from 'constants/regex'
import { UI_VARIANT } from 'constants/ui'
import { useFormContext } from 'context/FormContext'
import React, { ChangeEvent } from 'react'
import { FormGroup } from '../../ui/FormGroup'
import './CardExpireDateField.css'

const CARD_EXPIRE_DATE_TEXT = {
  LABEL: '만료일',
}

const validateCardExpireDate = (name: string, value: string) => {
  switch (name) {
    case 'month':
      return Number(value) <= 12
    case 'year':
      return value.length !== 2
  }
}

const getConvertMonthDate = (value: string) => {
  let output = ''
  if (value.length > 0) {
    const [first] = value.split('')
    if (Number(first) > 1) {
      output += '0'
    }
    output += value.substring(0, 1)
  }

  if (value.length > 1) {
    const [first, second] = value.split('')
    if (Number(first + second) < 13) {
      output += value.substring(1, 2)
    }
  }
  return output
}

const CardExpireDateField: React.FC = () => {
  const { state, handleChange } = useFormContext()
  const { cardExpireDate } = state

  const onChangeExpireDate = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_NUMBER, '')

    handleChange({
      value:
        name === 'month' ? getConvertMonthDate(convertValue) : convertValue,
      key: PAYMENT_CARD_FORM_KEYS.CARD_EXPIRE_DATE,
      name,
    })
  }

  return (
    <FormGroup label={CARD_EXPIRE_DATE_TEXT.LABEL}>
      <div className='card-expire-date-container'>
        <Input
          type='text'
          name='month'
          value={cardExpireDate.month}
          variant={UI_VARIANT.GHOST}
          onChange={onChangeExpireDate}
          maxLength={2}
          placeholder='MM'
        />
        <span>/</span>
        <Input
          type='text'
          name='year'
          value={cardExpireDate.year}
          variant={UI_VARIANT.GHOST}
          onChange={onChangeExpireDate}
          maxLength={2}
          placeholder='YY'
        />
      </div>
    </FormGroup>
  )
}

export default CardExpireDateField
