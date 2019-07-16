import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import PlayersList from './components/PlayersList/PlayersList';

const testPlayers = [
  {
      name: 'Kasia',
      score: 5
  },
  {
      name: 'Basia',
      score: 0
  }
];

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);
  appComponent.setState({ testPlayers });
  const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');

  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state().testPlayers;

  expect(playersAfterUpdate[0].score).toEqual(5);
});