import React from 'react';
import './alternate-link.css'
import Text from '../../../shared/components/text/text';

interface AlternateLinkProps {
    text: string;
}

const AlternateLink: React.FC<AlternateLinkProps> = props => {
    return (
        <button className='alternate-link'>
            <Text
                text={`or ${props.text}`}
                color='#6769EC'
                fontSize={24}
            />
        </button>
    );
}

export default AlternateLink;