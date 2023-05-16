import styles from './footer.module.scss';

export default function FooterComponent() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>Footer</div>
    </footer>
  );
}
