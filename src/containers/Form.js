import { connect } from 'react-redux'
import Form from '../components/Form'
 //import { fetchNewServs, deleteNewServ } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        newServs:state.newServs
        
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       // fetchNewServs: (newServ) => dispatch(fetchNewServs(newServs)),
//       deleteNewServ : (index) => dispatch(deleteNewServ (index))
//     }
// }

export default connect(mapStateToProps)(Form)