import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { 
        gift: {id}, 
        removeGift: mockRemove 
    }
    const gift = shallow(<Gift {...props} />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initialies a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' })
    });

    describe('when typing into the person input', () => {
        const parente = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: parente } })
        });

        it('updates the person in `state', () => {
            expect(gift.state().person).toEqual(parente);
        });
    });

    describe('when typing into the present input', () => {
        const presente = 'Guitar';
        
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: presente } });
        });
        
        it('updates the persent in `state`', () => {
            expect(gift.state().present).toEqual(presente);
        });
    })
    
    describe('when clicking `remove gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-rmv').simulate('click');
        })

        it('calls the removeGift() callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    });
});