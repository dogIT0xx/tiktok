import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import styles from './NavButton.module.scss'

const cx = classNames.bind(styles)

function NavButton({ to, href, className, icon, onClick, children }) {
  const props = {
    className: cx('container', className),
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

  return (
    <Comp {...props}>
      {icon && <img className={cx('icon')} src={icon} alt=""></img>}
      <span className={cx('title')}>{children}</span>
    </Comp>
  )
}

export default NavButton
