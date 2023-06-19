import classNames from 'classnames/bind'

import styles from './NavLink.module.scss'

const cx = classNames.bind(styles)

function NavLink({ children }) {
  return (
    <a className={cx('container')} href="/">
      {children}
    </a>
  )
}

export default NavLink
