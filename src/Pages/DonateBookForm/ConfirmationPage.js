import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userActions from '../../Redux/Actions/userActions';

export default function ConfirmationPage({ BTD }) {
  const dispatch = useDispatch();
  const history = useHistory();
  function handleSubmit() {
    console.log('BTD ', BTD);

    debugger;

    dispatch(userActions.createDonationToAPI(BTD));
    history.push('/profile');
  }

  function credits() {
    if (BTD) {
      switch (parseInt(BTD.condition)) {
        case 1:
        case 2:
          return 1;
        case 3:
          return 2;
        case 4:
        case 5:
          return 3;
        default:
          return 1;
      }
    }
  }
  if (BTD) {
    return (
      <div className="confirmation-page">
        <h3>
          You will recieve {credits()} credits for your book {BTD.title} would
          you like to finalize the donation?
        </h3>
        <button onClick={handleSubmit}>Confirm</button>
        <button>Cancel</button>
      </div>
    );
  }
}
