import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import App from "../App";
import Icon from "../components/ornament/Icon";
import Input from "../components/ornament/InputIcon";
import ValidateKey from "../components/ornament/ValidateKey";
import InputButton from "../components/ornament/InputButton";
import InputNumbers from "../components/ornament/InputNumbers";
import NumberLogger from "../components/ornament/NumberLogger";
import Trigger from "../components/ornament/Trigger";
import ListNumbers from "../components/ornament/ListNumbers";
import numberItem from "../components/ornament/NumberItem";
import NumberItem from "../components/ornament/NumberItem";

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
            <ComponentPreview path="/InputNumbers">
                <InputNumbers/>
            </ComponentPreview>
            <ComponentPreview path="/NumberLogger">
                <NumberLogger/>
            </ComponentPreview>
            <ComponentPreview path="/Trigger">
                <Trigger/>
            </ComponentPreview>
            <ComponentPreview path="/listNumbers">
                <listNumbers/>
            </ComponentPreview>
            <ComponentPreview path="/ListNumbers">
                <ListNumbers/>
            </ComponentPreview>
            <ComponentPreview path="/numberItem">
                <numberItem/>
            </ComponentPreview>
            <ComponentPreview path="/NumberItem">
                <NumberItem/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
