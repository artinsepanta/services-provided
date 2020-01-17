import { connect } from 'react-redux'
import Form from '../components/Form'
 import { fetchNewServ, deleteUserService } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        UeserServices:state.UeserServices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // fetchNewServs: (newServs) => dispatch(fetchNewServs(newServs)),
      deleteUserService : (index) => dispatch(deleteUserService (index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)