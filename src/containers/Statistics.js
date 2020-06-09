import { connect } from 'react-redux';
import Stat from '../components/Statistics';

export default connect(
mapStateToProps => ({
results: mapStateToProps.results
}),

mapDispatchToProps => ({
    areResults : () => {
        mapDispatchToProps({type: 'RESULTS_IN_LS'})
    }
})
)(Stat)