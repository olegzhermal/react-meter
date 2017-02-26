import React from 'react'
import { storiesOf } from '@kadira/storybook'
import Meter from '../src'

storiesOf('PasswordStrengthMeter', module)
  .add('Default', () => (
    <Meter />
  ))
  .add('Partial meter', () => (
    <Meter meterValue={60} meterMaxValue={100}/>
  ))
  .add('Full meter', () => (
    <Meter meterValue={10}/>
  ))
  .add('Green meter color', () => (
    <Meter meterValue={60} meterMaxValue={100} meterColor={'green'}/>
  ))
  .add('Label for meter', () => (
    <Meter meterValue={60} meterMaxValue={100} meterLabel={'My meter'}/>
  ))
