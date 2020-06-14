import { connect } from 'react-redux';
import Footer from '../components/Footer'

export default connect(
state => ({
    isDayMode: state.isDayMode
}),
dispatch => ({  
   
})
)(Footer)