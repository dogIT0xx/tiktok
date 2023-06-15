import classNames from 'classnames/bind'

import styles from './Header.module.scss'
import images from '~/assets/images'
import Search from '~/components/Search'
import Button from '~/components/Button'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('container')}>
      {/* logo */}
      <img className={cx('logo')} src={images.logo} alt="" />

      {/* search */}
      <Search />

      {/* actions */}
      <div className={cx('actions')}>
        <Button className={cx('upload-btn')} size="size-m" icon={icons.plus}>
          Upload
        </Button>
        <Button
          className={cx('login-btn')}
          size="size-m"
          customStyle={{
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#fe2c55',
            color: '#ffffff'
          }}
        >
          Log in
        </Button>
        <button className={cx('more-btn')}></button>
      </div>
    </header>
  )
}

export default Header
