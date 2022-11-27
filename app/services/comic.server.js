const { ObjectId } = require("mongodb");

class ComicService {
  constructor(client) {
    this.Comic = client.db().collection("comics");
  }
  // Định nghĩa các phương thức truy xuất CSDL sử dụng mongodb API
}

module.exports = ComicService;