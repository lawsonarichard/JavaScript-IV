/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor (attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
    destroy() {
      return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
  constructor(characterattributes) {
    super(characterattributes);
    this.healthPoints = characterattributes.healthPoints;
  }
    takeDamage () {
      return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(team, weapons, language) {
    super(team, weapons, language);
    this.team = team;
    this.weapons = weapons;
    this.language = language;
  }
  greet () {
    return `${this.name} offers a greeting in ${this.language}.`
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

console.log(mage.name);
console.log(mage.healthPoints);