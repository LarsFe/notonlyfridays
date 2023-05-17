import styles from './header.module.scss';
import Brand from './brand/BrandComponent';
import SearchComponent from './search/SearchComponent';
import LanguageComponent from './language/LanguageComponent';

export default function HeaderComponent() {
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Brand />
        <SearchComponent />
        <LanguageComponent isCopyVisible={false} />
      </div>
    </header>
  );
}
