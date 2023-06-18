import classNames from 'classnames/bind'

import styles from './Sidebar.module.scss'
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

const cx = classNames.bind(styles)

function Sidebar() {
  return (
    <aside className={cx('container')}>
      <Navbar />
      <Footer />
    </aside>
  )
}

export default Sidebar
