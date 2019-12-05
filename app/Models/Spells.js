export default class Spells {
  constructor(data) {
    this.name = data.name;
    this.id = data.id || data.id;
  }

  get Template() {
    return this.title;
  }
}
