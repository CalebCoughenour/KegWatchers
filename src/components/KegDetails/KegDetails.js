import React from "react";
import PropTypes from "prop-types";
import './KegDetails.css'

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h1>Keg Detail</h1>
          <h3>Brand: {keg.brand} - Beverage Name: {keg.name}</h3>
          <p><em>${keg.price}</em> - <em>ABV {keg.abv}%</em></p>
          <p>Description: {keg.description}</p>
          <p>{keg.pints} pints remaining</p>
          <button className='buttonStyle' onClick={ props.onClickingEdit }>Update Keg</button>
          <button className='buttonStyle' onClick={() => onClickingDelete(keg.id) }>Remove Keg</button>
          <button className='buttonStyle' onClick={() => onClickingDecrement(keg.id) }>Sell a Pint</button>
          <hr/>
        </div>
      </div>
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