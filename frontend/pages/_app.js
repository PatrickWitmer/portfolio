import PropTypes from 'prop-types';
import Page from '../components/Page';
import '../components/styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component pageProps={pageProps} />
    </Page>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};
