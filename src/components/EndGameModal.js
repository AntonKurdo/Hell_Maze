import React, {useRef} from 'react';
import PropTypes from 'prop-types';

export default function EndGameModal({isGameEnd, steps, level, onCancel, onSave}) {
    const inputName = useRef(null);

    function saveResults(e) {
        e.preventDefault();
        console.log(inputName.current.value)
        onSave(inputName.current.value, steps, level);
        inputName.current.value = '';

    }
    function cancel(e) {
        e.preventDefault();
        onCancel();
    }
   
    return (
        <div className={isGameEnd ? 'modal_endgame' : 'modal_endgame _active'}>
            <div className="jumbotron">
                <h1 className="display-4">You win!!!</h1>
                <p className="lead">went through a maze in <span className='steps_cont'>{steps} </span>steps</p>
                <input ref={inputName} type='text' />
                <br />
                <small style={{fontStyle: 'italic'}}>Enter Your nickname</small>
                <hr className="my-4"/>
                <p>Top score will be available at Statistics</p>
                <a onClick={saveResults} style={{marginRight: '10px'}} className="btn btn-primary btn-lg" href="#id" role="button">Save</a>
                <a onClick={cancel} className="btn btn-danger btn-lg" href="#id" role="button">Cancel</a>
            </div>
        </div>
    )
}

EndGameModal.propTypes = {
    isGameEnd: PropTypes.bool.isRequired,
    steps: PropTypes.number.isRequired,
    level: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}