import React, { PropTypes } from 'react';

function Repo(props) {
  return (
    <div><h2>{props.params.repoName}</h2></div>
  );
}

Repo.propTypes = {
  params: PropTypes.shape({
    repoName: PropTypes.string,
  }),
};

export default Repo;
