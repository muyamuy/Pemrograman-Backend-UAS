// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients";
      /**
       * Melakukan query menggunakan method query.
       */
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  /**
   */
  static async create(data) {
    //  insert data ke database
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO patients SET ?";
      db.query(sql, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    // query sesuai id
    const patient = await this.find(id);
    return patient;
  }

  // Mengupdate data 
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE patients SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        resolve(results);
      });
    });

    // Mencari data update
    const patient = await this.find(id);
    return patient;
  }

  // Menghapus data 
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        resolve(results);
      });
    });
  }

  // Mencari data sesuai id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE id = ?";
      db.query(sql, id, (err, results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  // Mencari data sesuai Nama
  static findName(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE name = ?";
      db.query(sql, name, (err, results) => {
        const [patient] = results;
        resolve(patient);
      });
    });
  }

  // Mencari data sesuai Status yang positif
  static findStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM patients WHERE status = ?";
      db.query(sql, status, (err, results) => {
        // destructing array
        const [patient] = results;
        resolve(patient);
      });
    });
  }

}

// export class Patient
module.exports = Patient;