var TestUtils = React.addons.TestUtils

describe('CheckboxWithLabel', function () {
  it('changes the text after click', function () {
    var checkbox = TestUtils.renderIntoDocument(
      <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    var checkboxNode = ReactDOM.findDOMNode(checkbox);

    expect(checkboxNode.textContent).toEqual('Off');

    TestUtils.Simulate.change(
      TestUtils.findRenderedDOMComponentWithTag(
        checkbox,
        'input'
      )
    );
    expect(checkboxNode.textContent).toEqual('On');
  });

});
