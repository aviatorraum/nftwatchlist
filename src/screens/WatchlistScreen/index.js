import ScreenView from './view';
import { connect } from 'react-redux';
import { getWatchlistAction, deleteWatchlistAction } from '../../actions/watchlistActions';

const mapStateToProps = ({ watchlist }) => {
  const list = watchlist.get('list');
  const listSize = list.size;
  return ({
  list,
  listSize,
  totalSoldPrice: watchlist.get('totalSoldPrice'),
  });
};

const mapDispatchToProps = dispatch => ({
  handleGet: payload => {
    dispatch(getWatchlistAction(payload));
  },
  handleRemove: payload => {
    dispatch(deleteWatchlistAction(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScreenView);
