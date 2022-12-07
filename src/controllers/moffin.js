const { validateToken, getIdByToken } = require('../../utils/tokenValidation');
const Report = require('../database/Moffin/Moffin.report.model');
const { keyAccess } = require('../configs/ConstantTokens');



exports.create = (req, res) => {
    const body = req.body
    const id = req.params.id

    const token = req.headers['authorization'];
    const validacion = validateToken(token, keyAccess);
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
    const token = req.headers['authorization'];
    const id = getIdByToken(token, keyAccess);
    const validacion = validateToken(token, keyAccess);
    if (validacion){
        Report.getReportById(id, (response => {
            res.json(response);
        }))
    } else {
        res.status(403).json({ message: 'Access denied, invalid token' })
    }
}