import React, { Component } from 'react';
import { WrappedFieldProps } from 'redux-form';
import Input from '../../components/input/input';
import Text from '../../../shared/components/text/text';

export const renderInput = (formProps: WrappedFieldProps) => {
    return (
        <div>
            <Input 
                value={formProps.input!.value}
                onChange={formProps.input!.onChange}
                onFocus={formProps.input!.onFocus}
                placeholder={formProps.input!.name}
                type={formProps.input!.name}
            />
            {renderError(formProps.meta)}
        </div>
    );
};

const renderError = (meta: any) => {
    if (meta.visited) {
        return (
            <Text
                text={meta.error}
                color='black'
            />
        );
    }
}
