import React from 'react';
import { shallow, mount } from 'enzyme';

import PlayersList from './PlayersList';
import Player from '../Player/Player';

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
    shallow(<PlayersList players={[]}/>)
});

it('renders correct number of players', () => {
    const playerComponent = mount(<PlayersList players={testPlayers} />);
    const exptectedPlayersNumber = playerComponent.find(Player).length;

    expect(exptectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate when called', () => {
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={testPlayers} onScoreUpdate={mockedOnScoreUpdate} />);
    const firstPlayer = playerComponent.find(Player).first();
    const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');

    onPlayerScoreChange(10);

    expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});