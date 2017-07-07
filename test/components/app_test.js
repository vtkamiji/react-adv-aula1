import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

//Use 'describe' to group together similar tests
describe('App' , () => {
  let component;

  // Create a instante of App
  beforeEach(() => {
    component = renderComponent(App);
  });


  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    // Use 'expect' to make a 'assertion' about a target
    expect(component).to.contain('React simple starter');
  });
});
