import React from "react";
import { create } from "react-test-renderer";
import Input from './input';

describe('When the Input component is rendered', () => {
    it('it should pass the given input properties to an input', () => {
        const props = {
            placeholder: 'test_placeholder',
            type: 'test_type',
            value: 'text_value',
        };

        const input = create(<Input { ...props } />);
        const instance = input.root;

        expect(instance.findByType(Input).props).toEqual(props);
    });
});
