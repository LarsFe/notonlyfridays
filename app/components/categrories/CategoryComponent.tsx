import styles from './categories.module.scss';
import Image from 'next/image';

export default function CategoryComponent() {
  return (
    <div className={styles['category-collection']}>
      <ul className={styles['category-collection__list']}>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Spielwaren
          </span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Kleidung
          </span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Unverpackt
          </span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Juweliere
          </span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Second Hand
          </span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>Möbel</span>
        </li>
        <li className={styles['category-collection__item']}>
          <Image
            src="/images/language.svg"
            alt="Beleaf Logo"
            width={40}
            height={40}
            priority
          />
          <span className={styles['category-collection__category']}>
            Reisen
          </span>
        </li>
      </ul>
    </div>
  );
}
