import classNames from 'classnames/bind'

import styles from './Footer.module.scss'
import NavLink from '~/components/NavLink'

const cx = classNames.bind(styles)

function Footer() {
  return (
    <footer className={cx('container')}>
      <div className={cx('navlink-container')}>
        <NavLink>About</NavLink>
        <NavLink>Newsroom</NavLink>
        <NavLink>Careers</NavLink>
        <NavLink>ByteDance</NavLink>
      </div>
      <div className={cx('navlink-container')}>
        <NavLink>TikTok for Good</NavLink>
        <NavLink>Advertise</NavLink>
        <NavLink>Developers</NavLink>
        <NavLink>Transparency</NavLink>
        <NavLink>TikTok Rewards</NavLink>
        <NavLink>TikTok Embeds</NavLink>
      </div>
      <div className={cx('navlink-container')}>
        <NavLink>Help</NavLink>
        <NavLink>Safety</NavLink>
        <NavLink>Terms</NavLink>
        <NavLink>Privacy</NavLink>
        <NavLink>Creator Portal</NavLink>
        <NavLink>Community Guidelines</NavLink>
      </div>
      <div className={cx('navlink-container')}>
        <NavLink>© 2023 TikTok</NavLink>
      </div>
    </footer>
  )
}

export default Footer
