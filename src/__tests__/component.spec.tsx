import * as React from "react";
import {CattodGrid} from "..";
import {create} from "react-test-renderer";

test("Component should show 'red' text 'Hello World'", () => {
  const component = create(<CattodGrid  height="400px"/>);
  const testInstance = component.root;

  expect(testInstance.findByType(CattodGrid).props.height).toBe("400px");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});