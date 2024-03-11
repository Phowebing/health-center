import Link from 'next/link';
import React from 'react';
import styles from '@/styles/header.module.scss';

const HeaderComponent = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.flexitem}>
          <Link href="/" className={styles.box}>
            로고
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;