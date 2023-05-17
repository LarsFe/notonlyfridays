import styles from './legal-navigation.module.scss';

export default function LegalNavigationComponent() {
  return (
    <nav>
      © Beleaf GmbH
      <span
        className={styles['legal-navigation__separator']}
        aria-hidden="true"
      >
        ·
      </span>
      <a href="#">Datenschutz</a>
      <span
        className={styles['legal-navigation__separator']}
        aria-hidden="true"
      >
        ·
      </span>
      <a href="#">Nutzungsbedingungen</a>
      <span
        className={styles['legal-navigation__separator']}
        aria-hidden="true"
      >
        ·
      </span>
      <a href="#">Sitemap</a>
      <span
        className={styles['legal-navigation__separator']}
        aria-hidden="true"
      >
        ·
      </span>
      <a href="#">Impressum</a>
    </nav>
  );
}
