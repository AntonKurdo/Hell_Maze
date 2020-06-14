import { connect } from 'react-redux';
import Stat from '../components/Statistics';

export default connect(
state => ({
    results: state.results,
    isDayMode: state.isDayMode
}),

dispatch => ({
    areResults : () => {
        dispatch({type: 'RESULTS_IN_LS'})
    }
})
)(Stat)