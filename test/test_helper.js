import jsdom from 'jsdom'; //JSDOM: simultate browser HTML DOM
import jquery from 'jquery'; //import jquery
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

//Set up testing environment to run like a browser in the command line
//global === window(browser)
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView; //fake instance do dom
const $ = jquery(global.window); //provem o dom para jquery trabalhar


//build a 'renderCOmponent' helper that should render a given react class
function renderComponent(ComponentClass, props, state) {
    //instancia uma class component
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
            <ComponentClass {...props}/>
        </Provider>);

    //wrap the html with Jquery
    return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML
}


//Build helper for simulating events
//cria um método no Jquery
$.fn.simulate = function(eventName, value) {
    if (value) {
        this.val(value);
    }
    TestUtils.Simulate[eventName](this[0]);
}

//Set up chai-query
chaiJquery(chai, chai.util, $); //chaiJquery Docs

export { renderComponent, expect };