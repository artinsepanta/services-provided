import { connect } from 'react-redux'
import Form1 from '../components/Form1'
import { removeUserService } from '../Redux/actions'

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      removeUserService : (index) => dispatch(removeUserService(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form1)