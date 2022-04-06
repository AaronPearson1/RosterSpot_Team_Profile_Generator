const Player = require("../lib/player");

describe("Player", () => {
  describe("getName", () => {
    it("should return the name of the player", () => {
      const inputName = "Bob";

      const playerName = new Player({ name: "Bob" }).getName();

      expect(playerName).toEqual(inputName);
    });
  });
  describe("getId", () => {
    it("should return the id of the given player", () => {
      const inputId = 2;

      const id = new Player({ id: 2 }).getId();

      expect(id).toEqual(inputId);
    });
  });
  describe("getEmail", () => {
    it("should return the email of the given player", () => {
      const inputEmail = "example@email.com";

      const email = new Player({ email: "example@email.com" }).getEmail();

      expect(email).toEqual(inputEmail);
    });
  });
  describe("getRole", () => {
    it("should return 'Player'", () => {
      const playerType = "Player";

      const result = new Player({}).getRole();

      expect(result).toEqual(playerType);
    });
  });
});
