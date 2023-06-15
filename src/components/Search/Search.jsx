import classNames from 'classnames/bind'

import styles from './Search.module.scss'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function Search() {
  return (
    <form className={cx('container')}>
      <input className={cx('input')} />
      <img className={cx('icon')} src={icons.circleXmark} alt="" />
      <span className={cx('spliter')}></span>
      <button className={cx('btn')}>
        <img className={cx('btn-icon')} src={icons.searchBtn} alt="" />
      </button>
    </form>
  )
}

export default Search
