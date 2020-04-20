// import * as Actions from '../../actions/fuse/index';
import navigationConfig from 'app/configs/navigationConfig';

const initialState = navigationConfig;

const navigation = function (state = initialState, action) {
    switch ( action.type )
    {
        // case Actions.GET_NAVIGATION:
        // {
        //     return [
        //         ...state
        //     ];
        // }
        default:
        {
            return state;
        }
    }
};

export default navigation;
