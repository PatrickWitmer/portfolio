import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <h2>This is the page component</h2>
      <h3> {cool} </h3>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  cool: PropTypes.string,
};
