import React from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

import { getPhoto } from '../actions';

const NASAPhoto = props => {
  const fetchPhoto = e => {
    e.preventDefault();
    props.getPhoto();
  };

  return (
    <>
      {props.photoOfTheDay && (
        <div>
            <img src={props.photoOfTheDay.url} alt="NASA Photo of the day" />
            <div className='top'>
                <h1 className='title'>{props.photoOfTheDay.title}</h1>
                <p className='title'>Today is: {props.photoOfTheDay.date}</p>
            </div>
            <p className='explanation'>{props.photoOfTheDay.explanation}</p>
        </div>
      )}
      {props.isLoading && <Loader type='Audio' color='#00BFFF' height='90' width='60' />}
      {props.error && <p className="error">{props.error}</p>}
      <Button color="info" onClick={fetchPhoto}>
        Lets Get Started!
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  photoOfTheDay: state.photoOfTheDay,
  error: state.error,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  { getPhoto }
)(NASAPhoto);
