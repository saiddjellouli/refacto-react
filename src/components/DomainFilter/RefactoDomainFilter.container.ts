import RefactoFilter from './RefactoDomainFilter';
import { connect } from 'react-redux'
import { getDomains } from '../../redux/domains/selectors';
import { AppState } from '../../redux/store';

const mapStateToProps = (state: AppState) => ({
  domains: getDomains(state)
})

export default connect(mapStateToProps)(RefactoFilter)
