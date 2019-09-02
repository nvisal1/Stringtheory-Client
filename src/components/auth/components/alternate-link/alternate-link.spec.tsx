import React from "react";
import { create } from "react-test-renderer";
import AlternateLink from './alternate-link';
import Text from '../../../shared/components/text/text';

describe('When the AlternateLink component is rendered', () => {
    it('it should take the given text and place the word \'or\' in front of it', () => {
        const alternateLinkText = 'test';
        const alternateLink = create(<AlternateLink text={alternateLinkText} />);
        const instance = alternateLink.root;

        expect(instance.findByType(AlternateLink).props.text).toBe(alternateLinkText);
        expect(instance.findByType(Text).props.text).toBe(`or ${alternateLinkText}`);
    });
});


