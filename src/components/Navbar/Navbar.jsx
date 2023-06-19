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
      <ul className={cx('nav-main')}>
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
      <div className={cx('nav-login')}>
        <span className={cx('nav-login__tip')}>
          Log in to follow creators, like videos, and view comments.
        </span>
        <Button
          className={cx('nav-login__btn')}
          customStyle={{
            width: '208px',
            height: '48px',
            borderRadius: '4px',
            color: '#fe2c55',
            borderColor: '#fe2c55',
            padding: '6px 8px',
            marginTop: '20px',
            fontFamily: 'SofiaPro',
            fontSize: '18px',
            lineHeight: '25px',
            fontWeight: 600
          }}
        >
          Log in
        </Button>
      </div>
    </nav>
  )
}

export default Navbar
