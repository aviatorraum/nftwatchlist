import ScreenView from './view';
import { connect } from 'react-redux';
import { getNftsAction } from '../../actions/nftActions';
import { addWatchlistAction } from '../../actions/watchlistActions';

const mapStateToProps = ({ nft }) => ({
  nftList: nft.get('list'),
});

const mapDispatchToProps = dispatch => ({
  handleGetList: (payload) => {
    dispatch(getNftsAction(payload));
  },
  handleAdd: payload => {
    dispatch(addWatchlistAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenView);
