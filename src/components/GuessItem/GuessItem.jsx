import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './GuessItem.module.scss'

const cx = classNames.bind(styles)

function GuessItem({ icon, children }) {
  return (
    <li className={cx('container')}>
      <img className={cx('icon')} src={icon} alt="" />
      <span className={cx('text')}>{children}</span>
    </li>
  )
}

GuessItem.protoTypes = {
  icon: PropTypes.string,
  children: PropTypes.string
}

export default GuessItem
