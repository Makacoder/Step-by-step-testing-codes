const Commuter = require("../Models/commuter.model");

exports.addCommuter = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phoneNumber, password } = req.body;

    const newCommuter = await Commuter.create({firstName, lastName, email, phoneNumber, password});
    return res.status(201).json({
      newCommuter,
    });
  } catch (error) {
     console.log(error);
    return res.status(500).json({
      message: error.message,
     
    });
  }
};

exports.countCommuter = async (req, res, next) => {
  try {
    const countCommuter = await Commuter.countDocuments();
    if (!countCommuter) throw error;

    return res.status(200).json({
      success: true,
      countCommuter,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateCommuter = async (req, res, next) => {
  try {
    const { _id } = req.query;
    const updateCommuter = await Commuter.findOneAndUpdate({ _id }, req.body, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      updateCommuter,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.removeCommuter = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const removeCommuter = await Transporter.findOneAndDelete({ _id });
    return res.status(200).json({
      success: true,
      message: `The commuter has been removed`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
