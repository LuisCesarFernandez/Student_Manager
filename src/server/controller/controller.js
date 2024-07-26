const db = require("../db/mysql");

const TABLE = "Task";

const get_All = () => {
  return db.getAll(TABLE);
};

const get_ID = (ID) => {
  return db.getID(TABLE,ID)
}

const post_Data = (DATA) => {
  return db.postData(TABLE, DATA)
}

const update_Data = (DATA, ID) => {
  return db.update(TABLE, DATA, ID)
}

const remove_Data = (ID) => {
  return db.remove(TABLE, ID)
}

module.exports = {
  get_All,
  get_ID,
  post_Data,
  update_Data,
  remove_Data,
};
