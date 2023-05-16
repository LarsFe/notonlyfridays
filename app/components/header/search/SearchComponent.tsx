import styles from './search.module.scss';
import InputComponent from '../../form-fields/InputComponent';
import LabelComponent from '../../form-fields/LabelComponent';

export default function SearchComponent() {
  const identifier = 'search';

  return (
    <form className={styles.search}>
      <LabelComponent identifier={identifier} />
      <InputComponent inputType="text" identifier={identifier} />
    </form>
  );
}
