const express = require("express");
const Commuter = require("../Controllers/commuter.controller");

const router = express.Router();

router.post("/addCommuter", Commuter.addCommuter);
// router.get("/countCommuter", Commuter.countCommuter);
// router.patch("/updateCommuter", Commuter.updateCommuter);
// router.delete("/removeCommuter", Commuter.removeCommuter);

module.exports = router;
