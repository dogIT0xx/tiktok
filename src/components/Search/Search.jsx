import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'

import styles from './Search.module.scss'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Search() {
  return (
    <Tippy
      visible
      interactive
      placement="bottom"
      render={(attrs) => (
        <div className={cx('guess-popover')} {...attrs}>
          <ul className={cx('guess-list')}>
            <span className={cx('guess-list__title')}>You may like</span>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 1</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 2</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 3</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 4</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 5</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 6</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 7</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 8</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 9</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 9</span>
            </li>
            <li className={cx('guess-item')}>
              <img className={cx('guess-item__icon')} src={icons.fire} alt="" />
              <span className={cx('guess-item__text')}>Hoang 9</span>
            </li>
          </ul>
        </div>
      )}
    >
      <form className={cx('container')}>
        <input className={cx('input')} placeholder="Search" />
        <img className={cx('icon')} src={icons.circleXmark} alt="" />
        <span className={cx('spliter')}></span>
        <button className={cx('btn')}>
          <img className={cx('btn-icon')} src={icons.searchBtn} alt="" />
        </button>
      </form>
    </Tippy>
  )
}

export default Search
