import { connect } from 'react-redux';
import AddService from '../components/AddService';
import { addService } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
    return {
        AddService: (usersServices) => dispatch(addService(usersServices))
    }
}

export default connect(null, mapDispatchToProps)(AddService);