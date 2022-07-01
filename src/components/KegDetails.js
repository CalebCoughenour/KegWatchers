import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>{keg.brand} - {keg.name}</h3>
      <p><em>{keg.price}</em> - <em>{keg.abv}</em></p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id) }>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;