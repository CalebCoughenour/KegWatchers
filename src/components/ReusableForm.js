import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Beverage Name' />
        <input
          type='text'
          name='brand'
          required='required'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          required='required'
          placeholder='Price of Keg' />
          <input
          type='number'
          name='abv'
          required='required'
          placeholder='ABV Content' />
          <textarea
          name='description'
          required='required'
          placeholder='Beverage Description' />
          <input
          type='number'
          name='pints'
          required='required'
          placeholder='How Many Pints' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;