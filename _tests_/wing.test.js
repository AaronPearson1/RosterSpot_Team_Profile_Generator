const Wing = require("../lib/wing");

describe("Wing", () => {
  describe("getSchool", () => {
    it("should return the school of the wing", () => {
      const inputSchool = "schoolName";

      const wingSchool = new Wing({ school: "schoolName" }).getSchool();

      expect(wingSchool).toEqual(inputSchool);
    });
  });
  describe("getRole", () => {
    it("should return 'Wing'", () => {
      const role = "Wing";

      const wingRole = new Wing({}).getRole();

      expect(wingRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Wing", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-0">Wing</h6>
      </div>
      <div class="card-body">
        <p class="card-text">Number: </p>
        <p class="card-text">Email: <a href="mailto: " class="card-link" target="_blank"></a></p>
        <p class="card-text">School: </p>
      </div>
    </div>\n`;

      const wingCard = new Wing({
        name: "",
        id: "",
        email: "",
        school: "",
      }).getCard();

      expect(wingCard).toEqual(card);
    });
  });
});