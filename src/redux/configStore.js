import { createStore } from 'redux';
import Poster from '../redux/reducers/poster';

const configStore = () => {

    const store = createStore(Poster);

    return store;
};


export default configStore;