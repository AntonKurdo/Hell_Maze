import { connect } from 'react-redux';

import Navbar from '../components/Navbar';

export default connect(
state => ({  
    catched_certificates: state.catched_certificates,
    certificates: state.certificates,
    catched_skills: state.catched_skills   
}),
dispatch => ({     
 
})
)(Navbar)