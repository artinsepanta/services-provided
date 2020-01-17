import { connect } from 'react-redux'
import Form1 from '../components/Form1'
import { fetchUeserServices, deleteUeserServices } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        users: state.users,
        UeserServices:state.UeserServices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      // fetchMakes: (newServs) => dispatch(fetchNewServs(newServs)),
      deleteUeserService : (index) => dispatch(deleteUeserService (index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)