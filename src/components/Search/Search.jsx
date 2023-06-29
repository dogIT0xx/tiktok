import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { useState, useEffect } from 'react'

import styles from './Search.module.scss'
import icons from '~/assets/icons'
import { useDebounce } from '~/hooks'
import GuessItem from '~/components/GuessItem'
import AccountItem from '~/components/AccountItem'

const cx = classNames.bind(styles)

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [showResult, setShowResult] = useState(false)

  //  https://tiktok.fullstack.edu.vn/api/users/search?q=hoaa&type=less
  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    if (!debouncedValue) {
      setSearchResult([])
      return
    } else {
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debouncedValue}&type=less`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setSearchResult(data.data)
        })
    }
  }, [debouncedValue])

  return (
    <div className={cx('wrapper')}>
      <Tippy
        visible={showResult && searchResult.length > 0}
        interactive
        placement="bottom"
        render={(attrs) => (
          <div className={cx('guess-popover')} {...attrs}>
            <ul className={cx('guess-list')}>
              <span className={cx('guess-list__title')}>You may like</span>
              {/* <GuessItem icon={icons.fire}>Hoang 1</GuessItem> */}
              {searchResult.map((item) => (
                <AccountItem key={item.id} data={item}></AccountItem>
              ))}
            </ul>
          </div>
        )}
      >
        <form className={cx('container')}>
          <input
            className={cx('input')}
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
          />
          <img className={cx('icon')} src={icons.circleXmark} alt="" />
          <span className={cx('spliter')}></span>
          <button className={cx('btn')}>
            <img className={cx('btn-icon')} src={icons.searchBtn} alt="" />
          </button>
        </form>
      </Tippy>
    </div>
  )
}

export default Search
