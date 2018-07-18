import Adapter from 'enzyme-adapter-react-16';

import configureStore from 'redux-mock-store';

const setReduxStoreConfiguration = () =>{
	const middlewares = [];
	return configureStore(middlewares);
}

const setEnzymeConfiguration = (Enzyme) => {
	return Enzyme.configure({
		adapter: new Adapter(),
	});
}

export { setReduxStoreConfiguration, setEnzymeConfiguration };

export default { setReduxStoreConfiguration, setEnzymeConfiguration };
