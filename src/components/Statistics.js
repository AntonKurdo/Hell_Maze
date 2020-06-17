import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

export default function Statistics({results, areResults, isDayMode}) {

    useEffect(() => {
        areResults();
    }, [])

    function compare(a, b) {
        if (a.steps < b.steps) {
            return -1;
        }
        if (a.steps > b.steps) {
            return 1;
        }
        return 0;
    }

    return (
        <div className='table_cont'>
            <table className={isDayMode ? "table" : "table table_night"}>
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Level</th>
                        <th scope="col">Steps result</th>
                    </tr>
                </thead>
                <tbody>
                    {results
                        .sort(compare)
                        .map((result, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{result.name}</td>
                                    <td>{result.level}</td>
                                    <td>{result.steps}</td>
                                </tr>
                            )
                        })
}

                </tbody>
            </table>
        </div>
    )
}

Statistics.propTypes = {
    results: PropTypes.array.isRequired,
    areResults: PropTypes.func.isRequired,
    isDayMode: PropTypes.bool.isRequired
};