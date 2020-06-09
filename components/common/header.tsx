import React from 'react';
import Link from 'next/link';
import AppBar from "@material-ui/core/AppBar";
import styles from './header.module.scss';

export default function Header(props) {
  return (
      <AppBar position="fixed" elevation={0} style={{ backgroundColor: '#E8F5E9' }}>
        <div className={styles.headerContainer}>
            <Link href="/"><a className={styles.headerTab}>Home</a></Link>
            <Link href="/about/about"><a className={styles.headerTab}>About Us</a></Link>
            <Link href="/sponsors/prospective_sponsors"><a className={styles.headerTab}>Sponsors</a></Link>
            <Link href="/students/new_member"><a className={styles.headerTab}>Students</a></Link>
        </div>
      </AppBar>
)
}