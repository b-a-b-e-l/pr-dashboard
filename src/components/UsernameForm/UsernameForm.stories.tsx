import React from 'react'
import {  Meta } from '@storybook/react';
import UsernameForm  from './UsernameForm';


export default {
    component: UsernameForm,
    title: 'Components/UsernameForm',
  } as Meta;
  
  export const Primary: React.VFC<{}> = () => <UsernameForm></UsernameForm>;