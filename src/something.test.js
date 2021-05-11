import something from "./something";
import { expect } from "chai";
import _ from "lodash";

describe("something", function () {
  it("does something", function () {
    expect(something()).to.match(/do your thing here/);
  });
});
