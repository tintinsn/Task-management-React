import React from 'react'
import styles from './Header.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="logo">
        <span>Task Management</span>
      </div>
      <div className={styles.themeContainer}>
        <span>Light Mode</span>
        <span className="icon">Switch</span>
      </div>
    </header>
  )
}

export default Header
