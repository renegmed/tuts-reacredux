import { connect } from 'react-redux';
import OrderOverview from './OrderOverview';

const mapStateToProps = (state) => ({
    orders: state.orders,
});

export default connect(mapStateToProps, null)(OrderOverview);