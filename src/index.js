import React, {PropTypes} from 'react'

export default function Meter(props) {
  const {
    meterValue,
    meterMaxValue,
    meterWidth: width,
    meterHeight: height,
    meterColor,
    meterBackground,
    borderRadius
  } = props

  const stepWidth = width.replace(/(^\d+)(.+$)/i,'$1') / meterMaxValue
  const widthUnit = width.replace(/(^\d+)(.+$)/i,'$2')
  const innerValue = (meterValue > meterMaxValue) ? meterMaxValue : meterValue

  const style = {
    height: '20px',
    border: '0px',
    borderRadius
  }

  const outerStyle = {
    ...style,
    width,
    background: meterBackground,
  }

  const innerStyle = {
    ...style,
    width: `${innerValue * stepWidth}${widthUnit}`,
    background: meterColor
  }

  const labelStyle = {
    marginRight: '10px'
  }

  const meterLabel = props.meterLabel ? <span style={labelStyle}>{props.meterLabel}</span> : null

  return (
      <div style={{display: 'flex'}}>
        {meterLabel}
        <div style={outerStyle}>
          <div style={innerStyle}></div>
        </div>
      </div>
  )
}

Meter.propTypes = {
  meterValue: PropTypes.number,
  meterMaxValue: PropTypes.number,
  meterWidth: PropTypes.string,
  meterHeight: PropTypes.string,
  meterColor: PropTypes.string,
  meterBackground: PropTypes.string,
  borderRadius: PropTypes.string
}

Meter.defaultProps = {
  meterValue: 0,
  meterMaxValue: 5,
  meterWidth: '200px',
  meterHeight: '20px',
  borderRadius: '5px',
  meterColor: 'orange',
  meterBackground: 'silver'
}
