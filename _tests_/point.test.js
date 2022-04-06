const Point = require("../lib/point");

describe("Point", () => {
  describe("getGithub", () => {
    it("should return the github account of the Point", () => {
      const inputGit = "github";

      const pointGit = new Point({ github: "github" }).getGithub();

      expect(pointGit).toEqual(inputGit);
    });
  });
  describe("getRole", () => {
    it("should return 'Point'", () => {
      const role = "Point";

      const pointRole = new Point({}).getRole();

      expect(pointRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Point", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title">Stephen Curry</h5>
        <h6 class="card-subtitle mb-0">Point</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: 30</p>
        <p class="card-text">Email: <a href="mailto: email@address.com" class="card-link" target="_blank">email@address.com</a></p>
        <p class="card-text">Github: <a href="https://github.com/github " class="card-link" target="_blank">github</a></p>
      </div>
    </div>\n`;

      const pointCard = new Point({
        name: "Stephen Curry",
        id: "30",
        email: "email@address.com",
        github: "github",
      }).getCard();

      expect(pointCard).toEqual(card);
    });
  });
});