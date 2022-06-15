import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import Icon from "../components/ornament/Icon";
import Input from "../components/ornament/InputIcon";
import RegisterKey from "../components/ornament/RegisterKey";
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
            <ComponentPreview path="/RegisterKey">
                <RegisterKey/>
            </ComponentPreview>
            <ComponentPreview path="/InputButton">
                <InputButton/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
