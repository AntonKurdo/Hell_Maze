import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

function useKey(key, cb) {
    const callbackRef = useRef(cb);
    useEffect(() => {
        callbackRef.current = cb;
    })
    useEffect(() => {
        function handle(evt) {
            if (evt.code === key) {
                callbackRef.current(evt);
            }
        }
        document.addEventListener('keydown', handle);
        return () => document.removeEventListener('keydown', handle)

    }, [key]);
}

export default function Move({onUp, onDown, onLeft, onRight}) {

    useKey('ArrowUp', () => {
        onUp()
    })
    useKey('ArrowDown', () => {
        onDown()
    })
    useKey('ArrowLeft', () => {
        onLeft()
    })
    useKey('ArrowRight', () => {
        onRight()
    })

    return (
        <div ></div>
    )

}
Move.propTypes = {
    onUp: PropTypes.func.isRequired,
    onDown: PropTypes.func.isRequired,
    onLeft: PropTypes.func.isRequired,
    onRight: PropTypes.func.isRequired
}