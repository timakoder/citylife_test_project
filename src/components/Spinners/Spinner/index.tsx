import React from 'react';
import cx from 'classnames';
import classes from './Spinner.module.css';

const sizeToClassNameMapping = {
  small: 'smallRing',
  medium: 'mediumRing',
  large: 'largeRing'
};

const colorToClassNameMapping = {
  blue: 'blueRing',
  red: 'redRing',
  grey: 'greyRing'
};

export interface ISpinner {
  size?: keyof typeof sizeToClassNameMapping,
  color?: keyof typeof colorToClassNameMapping
}

const Spinner: React.FC<ISpinner> = ({
  size = 'medium',
  color = 'blue'
}) => <div className={classes.spinner}>
  {Array(4).fill(null).map((v, i) => 
  <div className={cx(
    classes[sizeToClassNameMapping[size]],
    classes[colorToClassNameMapping[color]]
  )} key={i}/>
  )}
</div>

export default Spinner;
