import Image from 'next/image';
import styles from './language.module.scss';

type LanguageComponentProps = {
  isCopyVisible?: boolean;
  isHeader?: boolean;
  size?: number;
};

export default function LanguageComponent(props: LanguageComponentProps) {
  const { isCopyVisible = true, isHeader = true, size = 40 } = props;
  const classes = [];

  if (isHeader) {
    classes.push(styles['is-header']);
  }

  return (
    <button className={styles['language-switch']}>
      <Image
        className={classes.join(' ')}
        src="/images/language.svg"
        alt="Language Icon"
        width={size}
        height={size}
        priority
      />
      {isCopyVisible && (
        <span className={styles['language-switch__copy']}>Deutsch (DE)</span>
      )}
    </button>
  );
}
