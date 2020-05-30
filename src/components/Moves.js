import React, {useEffect, useRef} from 'react';

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

export default function MoveUp({onUp, onDown, onLeft, onRight}) {

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
