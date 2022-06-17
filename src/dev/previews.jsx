import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import Icon from "../components/ornament/Icon";
import Input from "../components/ornament/InputIcon";
import ValidateKey from "../components/ornament/ValidateKey";
import InputButton from "../components/ornament/InputButton";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Icon">
                <Icon/>
            </ComponentPreview>
            <ComponentPreview path="/Input">
                <Input/>
            </ComponentPreview>
            <ComponentPreview path="/ValidateKey">
                <ValidateKey/>
            </ComponentPreview>
            <ComponentPreview path="/InputButton">
                <InputButton/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
