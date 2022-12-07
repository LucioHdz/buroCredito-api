const { validateToken } = require('../../utils/tokenValidation');
const Report = require('../database/Moffin/Moffin.report.model')

exports.create = (req, res) => {
    const body = req.body
    const id = req.params.id

    const token = req.headers['authorization'];
    const validacion = validateToken(token, 'codewaykeytoken');
    if (validacion) {
        const newReport = new Report(body);
        Report.saveReport(newReport, id, (response => {
            res.json(response);
        }));
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}
exports.read = (req, res) => {
    const id = req.params.id
    Report.getReportById(id, (response => {
        res.json(response);
    }))
}