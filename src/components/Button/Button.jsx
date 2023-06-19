import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({ to, href, primary, children, className, icon, size, onClick, customStyle }) {
  const props = {
    className: cx('container', size, className),
    onClick
  }
  let Comp = 'button'

  if (to) {
    Comp = Link
    props.to = to
  } else if (href) {
    Comp = 'a'
    props.href = href
  }

  if (!primary) {
    props.style = customStyle
  }

  return (
    <Comp {...props}>
      {icon && <img className={cx('icon')} src={icon} alt=""></img>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  )
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  customStyle: PropTypes.object
}

export default Button
