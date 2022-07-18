import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
    title: 'Avatar',
    component: Avatar,
    argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />



export const Small = Template.bind({});
Small.args = {
    size: 'small',
    format: 'square',
}

export const Normal = Template.bind({});
Normal.args = {
    size: 'normal',
}

export const Big = Template.bind({});
Big.args = {
    size: 'big',
}

export const Omg = Template.bind({});
Omg.args = {
    size: 'omg',
};




