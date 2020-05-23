import { connect } from 'react-redux';
import Board from '../components/Board'

export default connect(
state => ({
    cols: state.cols,
    rows: state.rows,
    certificates: state.certificates,
    width: state.width,
    gender: state.gender.avatar
    
}),
dispatch => ({  
})
)(Board)