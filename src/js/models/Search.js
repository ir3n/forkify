import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = "cd61c883f56178bda1cf3dee768fa7a7";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
