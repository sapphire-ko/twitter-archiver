import React from 'react';

import {
	connect,
} from 'react-redux';

import {
	HashRouter,
	Route,
	Switch,
} from 'react-router-dom';

import {
	State,
} from '../reducers';

import {
	getIsSocketConnected,
} from '../selectors';

import {
	MainContainer,
	SearchContainer,
	ModalContainer,
	MenuContainer,
	SocketContainer,
} from '../containers';

import {
	IndicatorComponent,
	NavigationComponent,
} from '../components';

import {
	Container,
	Grid,
} from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';
import '../styles/AppContainer.scss';

interface ComponentProps {
	isSocketConnected: boolean;
}

class AppComponent extends React.Component<ComponentProps> {
	public componentDidMount() {
		window.scroll(0, 0);
	}

	public render() {
		return (
			<HashRouter
				// history={history}
			>
				<React.Fragment>
					<IndicatorComponent {...this.props} />
					<Container>
						<Grid>
							<Grid.Column width={4}>
								<MenuContainer />
							</Grid.Column>

							<Grid.Column
								id="component_b"
								width={12}
							>
								<NavigationComponent />
								<Switch>
									<Route
										exact={true}
										path="/"
										component={MainContainer}
									/>
									<Route
										exact={true}
										path="/search"
										component={SearchContainer}
									/>
								</Switch>
							</Grid.Column>
						</Grid>
					</Container>

					<ModalContainer />
					<SocketContainer />
				</React.Fragment>
			</HashRouter>
		);
	}
}

function mapStateToProps(state: State) {
	return {
		'isSocketConnected': getIsSocketConnected(state),
	};
}

export const AppContainer = connect(mapStateToProps)(AppComponent);
