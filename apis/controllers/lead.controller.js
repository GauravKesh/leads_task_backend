const Lead = require('../../models/lead.model');

exports.addLead = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            address,
            source,
            qualification,
            linkedin,
            interest
        } = req.body;

        const lead = new Lead({
            name,
            email,
            phone,
            address,
            source,
            qualification,
            linkedin,
            interest
        });

        await lead.save();
        res.status(201).json(lead);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.json(leads);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateLead = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name,
            email,
            phone,
            address,
            source,
            qualification,
            linkedin,
            interest
        } = req.body;

        const lead = await Lead.findByIdAndUpdate(
            id,
            {
                name,
                email,
                phone,
                address,
                source,
                qualification,
                linkedin,
                interest
            },
            { new: true, runValidators: true }
            /* new: true to return the updated data to the client if any update is requested */
            /*  run validator to check data type is correct as our schema rules is expecting from the client */
        );

        if (!lead) return res.status(404).json({ error: 'Lead not found' });

        res.json(lead);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deleteLead = async (req, res) => {
    try {
        const { id } = req.params;

        const lead = await Lead.findByIdAndDelete(id);

        if (!lead) return res.status(404).json({ error: 'Lead not found' });

        res.json({ message: 'Lead deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
