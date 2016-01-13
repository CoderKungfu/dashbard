var TestUtils = React.addons.TestUtils

describe('Salutation', function () {
  it('renders the name', function () {
    var testName = "Wilson";
    var salutation = TestUtils.renderIntoDocument(
      <Salutation name={testName} />
    );
    var headerNode = ReactDOM.findDOMNode(salutation);

    expect(headerNode.textContent).toEqual('Hello, '+testName);
  });

});
