import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Brand: {keg.brand} - Beverage Name: {keg.name}</h3>
      <p><em>${keg.price}</em> - <em>ABV {keg.abv}%</em></p>
      <p>Description: {keg.description}</p>
      <p>{keg.pints} pints remaining</p>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id) }>Remove Keg</button>
      <button onClick={() => onClickingDecrement(keg.id) }>Sell a Pint</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
}

export default KegDetail;