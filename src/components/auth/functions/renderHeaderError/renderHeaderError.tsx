import React from 'react';
import Text from '../../../shared/components/text/text';

export const renderHeaderError = (error: string) => {
    return (
        <Text 
            text={error}
            color='red'
            fontSize={15}
        />
    )
}