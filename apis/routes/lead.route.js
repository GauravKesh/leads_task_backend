const express = require('express');
const router = express.Router();
const {
    addLead,
    getLeads,
    updateLead,
    deleteLead
} = require('../controllers/lead.controller');

router.post('/leads', addLead);
router.get('/leads', getLeads);
router.put('/leads/:id', updateLead);
router.delete('/leads/:id', deleteLead);

module.exports = router;
