import { UI_VARIANT } from 'constants/ui'
import React, { ChangeEvent } from 'react'
import { FormGroup } from 'components/ui/FormGroup'
import { useFormContext } from 'context/FormContext'
import { Input } from 'components/ui/Input'
import { REGEX } from 'constants/regex'
import './CardOwnerField.css'
import { PAYMENT_CARD_FORM_KEYS } from 'constants/card'

const validateCardOwner = (cardOwner: string) => {
  return cardOwner.length !== 30
}

export const CardOwnerField = () => {
  const { state, handleChange } = useFormContext()
  const onChangeCardOwner = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement
    const convertValue = value.replace(REGEX.NOT_ENG, '')

    handleChange({
      value: convertValue,
      key: PAYMENT_CARD_FORM_KEYS.CARD_OWNER,
      // error: validateCardOwner(convertValue),
    })
  }
  return (
    <FormGroup label='카드 소유자(선택)'>
      <div className='card-owner-field-container'>
        <span className='display-limit-length'>
          {state.cardOwner.length}/30
        </span>
        <Input
          type='text'
          name='cardOwner'
          value={state.cardOwner}
          variant={UI_VARIANT.GHOST}
          maxLength={30}
          onChange={onChangeCardOwner}
          placeholder='카드에 표시된 이름과 동일하게 입력하세요'
        />
      </div>
    </FormGroup>
  )
}

export default CardOwnerField
