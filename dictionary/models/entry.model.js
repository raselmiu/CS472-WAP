const sql = require("./connection.db.js");

// constructor
const Entry = function(entry) {
  this.word = entry.word;
  this.wordtype = entry.wordtype;
  this.definition = entry.definition;
};


Entry.findByWord = (word, result) => {
  sql.query(`SELECT * FROM entries WHERE word = ${word}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found word: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Word with the id
    result({ kind: "not_found" }, null);
  });
};

Entry.getAll = (title, result) => {
  let query = "SELECT * FROM entries";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entries: ", res);
    result(null, res);
  });
};

Entry.getAllByType = (type, result) => {
  sql.query(`SELECT * FROM entries WHERE wordtype='%${title}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("entries: ", res);
    result(null, res);
  });
};



module.exports = Entry;