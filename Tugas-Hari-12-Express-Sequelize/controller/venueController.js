const { Venues } = require("../models/venues");

class VenueController {
  static async store(req, res) {
    try {
      let name = req.body.name;
      let address = req.body.address;
      let phone = req.body.phone;

      // Create a new user
      const newUser = await Venues.create({
        name,
        address,
        phone,
      });

      res.status(201).json({
        status: "success",
        message: "Data Venues Berhasil ditambahkan",
        data: newUser,
      });
    } catch (error) {
      res.status(401).json({
        status: "failed",
        message: "Data Venues gagal ditambahkan",
      });
    }
  }

  static async getDataAll(req, res) {}
  static async getDataById(req, res) {}
}

module.exports = VenueController;