// import PatientController
const PatientController = require("../controllers/PatientController");

// import express
const express = require("express");

// membuat object router
const router = express.Router();

/**
 * Membuat routing
 */
router.get("/", (req, res) => {
  res.send("Hello Covid API Express");
});

// Membuat routing patient
router.get("/patients", PatientController.index);
//menambahkan data pasien 
router.post("/patients", PatientController.store);
// mengedit data pasien
router.put("/patients/:id", PatientController.update);
// menghapus data pasien 
router.delete("/patients/:id", PatientController.destroy);
// menampilkan detail data pasien
router.get("/patients/:id", PatientController.show);
// mencari detail data pasien
router.get("/patients/findname/:name", PatientController.showName);
// mencari pasien sesuai status 
// positif
router.get("/patients/status/positif", PatientController.showPositif);
// sembuh
router.get("/patients/status/sembuh", PatientController.showSembuh);
// meninggal 
router.get("/patients/status/meninggal", PatientController.showMeninggal);

// export router
module.exports = router;