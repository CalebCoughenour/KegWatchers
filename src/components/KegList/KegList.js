import React from "react";
import Keg from "../Keg";
import PropTypes from "prop-types";
import './KegList.css'

function KegList(props) {

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <hr/>
          {props.kegList.map((keg) =>
            <Keg 
            whenKegClicked = { props.onKegSelection }
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            description={keg.description}
            pints={keg.pints}
            id={keg.id}
            key={keg.id}/>      
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;