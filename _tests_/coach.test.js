const Coach = require('../lib/coach');

describe("Coach", () => {
  describe("getRole", () => {
    it("should return 'Coach'", () => {
      const role = "Coach";

      const coachRole = new Coach({}).getRole();

      expect(coachRole).toEqual(role);
    });
  });
  describe("getCard", () => {
    it("should return the html card of the Coach", () => {
      const card = `    <div class="card shadow">
      <div class="card-header p-3 mb-0 bg-primary text-white">
        <h5 class="card-title"></h5>
        <h6 class="card-subtitle mb-0">Coach</h6>
      </div>
      <div class="card-body">
        <p class="card-text">ID: </p>
        <p class="card-text">Email: <a href="mailto: " class="card-link" target="_blank"></a></p>
        <p class="card-text">Office number: </p>
      </div>
    </div>\n`;

      const coachCard = new Coach({
        name: "",
        id: "",
        email: "",
        officeNumber: "",
      }).getCard();

      expect(coachCard).toEqual(card);
    });
  });
});