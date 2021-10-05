import React from 'react'
import {  Meta } from '@storybook/react';
import Card  from './Card';


export default {
    component: Card,
    title: 'Components/Card',
  } as Meta;
  
  export const Primary: React.VFC<{}> = () => <Card></Card>;