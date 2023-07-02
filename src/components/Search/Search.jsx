import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { useState, useEffect, useRef } from 'react'

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
  const [loading, setLoading] = useState(false)
  const debouncedValue = useDebounce(searchValue, 800)

  useEffect(() => {
    if (!debouncedValue) {
      setSearchResult([])
      return
    } else {
      setLoading(true)
      fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debouncedValue}&type=less`)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setSearchResult(data.data)
          setLoading(false)
          setShowResult(true)
        })
    }
  }, [debouncedValue])

  return (
    <div className={cx('wrapper')}>
      <Tippy
        visible={showResult && searchResult.length > 0}
        interactive
        placement="bottom"
        onClickOutside={() => setShowResult(false)}
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
          {loading && <img className={cx('icon', 'loading')} src={icons.spinner} alt="" />}
          {searchValue && !loading && (
            <img
              className={cx('icon')}
              src={icons.circleXmark}
              alt=""
              onClick={() => {
                setSearchValue('')
                setSearchResult([])
                setShowResult(false)
              }}
            />
          )}
          <span className={cx('spliter')}></span>
          <button className={cx('btn')}>
            <img className={cx('btn-icon')} src={icons.searchBtn} alt="" />
          </button>
          {console.log('render')}
        </form>
      </Tippy>
    </div>
  )
}

export default Search
