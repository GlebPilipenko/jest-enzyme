import {ShallowWrapper} from 'enzyme';
import {Component} from 'react';

export const findByDataTestAttr = (
  wrapper: ShallowWrapper<{}, Component['state'], Component>, value: string
) => wrapper.find(`[data-test='${value}']`);
