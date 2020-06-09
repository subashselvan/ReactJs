/// used with in different config -- npm run test2 will work with this file
import React from "react";
import {configure, shallow} from "enzyme";
import chai, {expect} from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import App, { add } from "../App";
configure({
   adapter: new Adapter()
});


// describe block is a group of test cases -- called as test spec
describe("Testing <App/> Component", () => {

  const wrapper = shallow(<App />);
  // test case 
  it("Renders welcome text", () => {
    const message = <p>Welcome to My App!</p>;
    expect(wrapper).to.contain(message);  
  });

  // function in a comp 
  it('has add function and works well', ()=>{
    expect(add(10, 20)).to.equal(30);
    expect(add(3, 2)).to.equal(5);
    expect(add(10, 3)).to.equal(13);
  });

  // testing methods residing inside comp class
  it('should have multiply method', () => {
    const appComponent = new App();
    expect(appComponent.multiply(2, 3)).to.equal(6);
    expect(appComponent.multiply(5, 5)).to.equal(25);
    expect(appComponent.multiply(20, 10)).to.equal(200);
  });

   // testing elements
   it('renders h1', () => {
    expect(wrapper.find('h1').text()).to.equal('React Hooks and Mocha Demo')
  });

  // testing comp's state and props
  it('should toggle second button’s disabled state when clicking on first button', () => {
    const firstButton = wrapper.find('button').at(0);
    firstButton.simulate('click');

    const secondButton = wrapper.find('button').at(1);
    expect(secondButton.props().disabled).to.equal(true);
  });

  
  chai.use(chaiEnzyme());
});

