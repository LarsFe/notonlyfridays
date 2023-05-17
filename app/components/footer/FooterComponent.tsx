import LanguageComponent from '../header/language/LanguageComponent';
import styles from './footer.module.scss';
import LegalNavigationComponent from './legal-navigation/LegalNavigationComponent';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__layout}>
          <LegalNavigationComponent />
          <LanguageComponent isHeader={false} size={20} />
        </div>
      </div>
    </footer>
  );
}
