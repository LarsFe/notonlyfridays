import styles from './header.module.scss';
import Brand from './brand/BrandComponent';
import SearchComponent from './search/SearchComponent';

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Brand />
        <SearchComponent />
        <div></div>
      </div>
    </header>
  );
}
