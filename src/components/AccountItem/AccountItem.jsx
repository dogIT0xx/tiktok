import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

import styles from './AccountItem.module.scss'
import icons from '~/assets/icons'

const cx = classNames.bind(styles)

function AccountItem({ data }) {
  return (
    <li className={cx('container')}>
      <img className={cx('avatar')} src={data.avatar} alt="" />
      <div className={cx('content')}>
        <h3 className={cx('username')}>
          {data.full_name}
          {data.tick && (
            <img className={cx('verification-badge')} src={icons.verificationBadge} alt=""></img>
          )}
        </h3>
        <h4 className={cx('nickname')}>{data.nickname}</h4>
      </div>
    </li>
  )
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired
}

export default AccountItem
