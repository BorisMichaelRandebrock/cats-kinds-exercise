require("dotenv").config();
const listKinds = require("./kindsControllers");

describe("Given the kindsController Function", () => {
  describe("When invoked with a Kind-List request", () => {
    test("Then it should respond invoking the json method with an object with the property kind: Gatoperro", async () => {
      listKinds(req, res);
    });
  });
});
