import React from "react"
import { render } from "@testing-library/react"
import App from "./src/App"

describe("<App />", () => {
  it("renders header", () => {
    const { getByText } = render(<App />)
    
    // HTTP Header Cheack "Hello World"
    const header = getByText("Hello World")
    expect(header).toBeInTheDocument('해당 페이지에서 Hello World를 찾을 수 없습니다.')
  })
})

  it('Test click event', () => {
    const wrapper = mount(<App />);
    expect(wrapper.state('num')).toEqual(0)
    wrapper.find('button').simulate('click');
    expect(wrapper.state('num')).toEqual(1);
  });