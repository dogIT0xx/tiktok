import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

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
      <div className={cx('logo')}>
        <img src={images.logo} alt="" />
      </div>

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
            width: '100px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#fe2c55',
            color: '#ffffff'
          }}
        >
          Log in
        </Button>
        <div className={cx('more-btn-wrapper')}>
          <Tippy
            visible
            interactive
            placement="bottom-start"
            offset={[25, 8]}
            render={(attrs) => (
              <div className={cx('more-btn-popover')} {...attrs}>
                <ul className={cx('setting-list')}>
                  <Button className={cx('setting-item')} icon={icons.language}>
                    English
                  </Button>
                  <Button className={cx('setting-item')} icon={icons.circleQuestion}>
                    Feedback and help
                  </Button>
                  <Button className={cx('setting-item')} icon={icons.keyboard}>
                    Keybroard shortcuts
                  </Button>
                  <Button className={cx('setting-item')} icon={icons.moon}>
                    Dark mode
                  </Button>
                </ul>
              </div>
            )}
          >
            <button className={cx('more-btn')}>
              <img src={icons.moreBtn} alt="" />
            </button>
          </Tippy>
        </div>
      </div>
    </header>
  )
}

export default Header
