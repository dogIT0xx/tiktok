import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Navbar.module.scss'
import icons from '~/assets/icons'
import NavButton from '~/components/NavButton'
import Button from '~/components/Button'

const cx = classNames.bind(styles)

function Navbar() {
  return (
    <nav className={cx('container')}>
      <ul className={cx('main')}>
        <li>
          <NavButton icon={icons.home}>For You</NavButton>
        </li>
        <li>
          <NavButton icon={icons.userGroup}>Following</NavButton>
        </li>
        <li>
          <NavButton icon={icons.compass}>Explore</NavButton>
        </li>
        <li>
          <NavButton icon={icons.cameraMovie}>LIVE</NavButton>
        </li>
      </ul>
      <div className={cx('login')}>
        <span className={cx('login__tip')}>
          Log in to follow creators, like videos, and view comments.
        </span>
        <Button className={cx('login__btn')}>Log in</Button>
      </div>
    </nav>
  )
}

export default Navbar
