import PropTypes from 'prop-types';
import Header from './Header';
import styles from './Page.module.css';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <div className={styles.innerstyles}>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
  cool: PropTypes.string,
};
