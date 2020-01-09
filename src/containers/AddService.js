import { connect } from 'react-redux'
import AddService from '../components/AddService'
import { addService } from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return {
        AddService: (service) => dispatch(addService(service))
    }
}

export default connect(null, mapDispatchToProps)(AddService)