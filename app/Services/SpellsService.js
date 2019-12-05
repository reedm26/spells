import Store from "../store.js";

let _spellsApi = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/spells"
});
let _sandbox = axios.create({
  baseURL: "http://bcw-sandbox.herokuapp.com/api/Marcel/spells"
});
class SpellsService {
  constructor() {
    console.log("hello from sevice");
  }

  async getSpellsAsync() {
    let res = await _spellsApi.get();
    console.log("from get spells", res.data);
  }
}

const service = new SpellsService();
export default service;
