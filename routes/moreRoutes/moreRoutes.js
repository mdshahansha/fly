const express = require('express');
const router = express.Router(); // Create a new Router instance

router.use(express.json()); // Note: Corrected invocation of express.json()

const moreContrller = require('../../controllers/moreContrller');




router.get('/offerandProgram', moreContrller.offerandProgram);
router.get('/fantasyPointSystem', moreContrller.fantasyPointSystem);
router.get('/fantasySelfHelp',moreContrller.fantasySelfHelp);//credit
router.get('/aboutUs', moreContrller.aboutUs );//withdraw
router.get('/termAndCondition',moreContrller.termAndCondition );
router.get('/privacyPolicy', moreContrller.privacyPolicy);
router.get('/contactUs', moreContrller.contactUs);
router.get('/faq', moreContrller.faq);
router.get('/Legality', moreContrller.Legality);
router.get('/responsibleGaming', moreContrller.responsibleGaming);



module.exports = router;

