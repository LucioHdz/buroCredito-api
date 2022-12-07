const database = require('../connection');


const Report = function (reportData) {

    this.NumeroMOP7 = reportData.NumeroMOP7;
    
    this.NumeroMOP6 = reportData.NumeroMOP6;
    
    this.NumeroMOP5 = reportData.NumeroMOP5;
    
    this.NumeroMOP4 = reportData.NumeroMOP4;
    
    this.NumeroMOP3 = reportData.NumeroMOP3;
    
    this.NumeroMOP2 = reportData.NumeroMOP2;
    
    this.NumeroMOP1 = reportData.NumeroMOP1;
    
    this.NumeroMOP0 = reportData.NumeroMOP0;

    this.NumeroMOPUR = reportData.NumeroMOPUR;

    this.NumeroCuentas = reportData.NumeroCuentas;

    this.CuentasPagosFijosHipotecas = reportData.CuentasPagosFijosHipotecas;

    this.CuentasRevolventesAbiertas = reportData.CuentasRevolventesAbiertas;

    this.CuentasCerradas = reportData.CuentasCerradas;

    this.CuentasNegativasActuales = reportData.CuentasNegativasActuales;

    this.CuentasClavesHistoriaNegativa = reportData.CuentasClavesHistoriaNegativa;

    this.CuentasDisputa = reportData.CuentasDisputa;

    this.NumeroSolicitudesUltimos6Meses = reportData.NumeroSolicitudesUltimos6Meses;

    this.NuevaDireccionReportadaUltimos60Dias = reportData.NuevaDireccionReportadaUltimos60Dias;

    this.MensajesAlerta = reportData.MensajesAlerta;

    this.ExistenciaDeclaracionesConsumidor = reportData.ExistenciaDeclaracionesConsumidor;

    this.TipoMoneda = reportData.TipoMoneda;

    this.TotalCreditosMaximosRevolventes = reportData.TotalCreditosMaximosRevolventes;

    this.TotalLimitesCreditoRevolventes = reportData.TotalLimitesCreditoRevolventes;

    this.TotalSaldosActualesRevolventes = reportData.TotalSaldosActualesRevolventes;

    this.TotalSaldosVencidosRevolventes = reportData.TotalSaldosVencidosRevolventes;

    this.TotalPagosRevolventes = reportData.TotalPagosRevolventes;

    this.PctLimiteCreditoUtilizadoRevolventes = reportData.PctLimiteCreditoUtilizadoRevolventes;

    this.TotalCreditosMaximosPagosFijos = reportData.TotalCreditosMaximosPagosFijos;

    this.TotalSaldosActualesPagosFijos = reportData.TotalSaldosActualesPagosFijos;

    this.TotalSaldosVencidosPagosFijos = reportData.TotalSaldosVencidosPagosFijos;

    this.TotalPagosPagosFijos = reportData.TotalPagosPagosFijos;

    this.NumeroMOP96 = reportData.NumeroMOP96;
    
    this.NumeroMOP97 = reportData.NumeroMOP97;

    this.NumeroMOP99 = reportData.NumeroMOP99;
    
    this.FechaAperturaCuentaMasAntigua = reportData.FechaAperturaCuentaMasAntigua;

    this.FechaAperturaCuentaMasReciente = reportData.FechaAperturaCuentaMasReciente;

    this.TotalSolicitudesReporte = reportData.TotalSolicitudesReporte;

    this.FechaSolicitudReporteMasReciente = reportData.FechaSolicitudReporteMasReciente;

    this.NumeroTotalCuentasDespachoCobranza = reportData.NumeroTotalCuentasDespachoCobranza;
    
    this.FechaAperturaCuentaMasRecienteDespachoCobranza = reportData.FechaAperturaCuentaMasRecienteDespachoCobranza;
    
    this.NumeroTotalSolicitudesDespachosCobranza = reportData.NumeroTotalSolicitudesDespachosCobranza;
    
    this.CodigoScore = reportData.CodigoScore;

    this.ValorScore = reportData.ValorScore;
    
}


Report.saveReport = (newReport, id, callback) => {
    const query = `insert into reporte values( DEFAULT ,
         '${newReport.NumeroMOP7}',
         '${newReport.NumeroMOP6}',
         '${newReport.NumeroMOP5}',
         '${newReport.NumeroMOP4}',
         '${newReport.NumeroMOP3}',
         '${newReport.NumeroMOP2}',
         '${newReport.NumeroMOP1}',
         '${newReport.NumeroMOP0}',
         '${newReport.NumeroMOPUR}',
         '${newReport.NumeroCuentas}',
         '${newReport.CuentasPagosFijosHipotecas}',
         '${newReport.CuentasRevolventesAbiertas}',
         '${newReport.CuentasCerradas}',
         '${newReport.CuentasNegativasActuales}',
         '${newReport.CuentasClavesHistoriaNegativa}',
         '${newReport.CuentasDisputa}',
         '${newReport.NumeroSolicitudesUltimos6Meses}',
         '${newReport.NuevaDireccionReportadaUltimos60Dias}',
         '${newReport.MensajesAlerta}',
         '${newReport.ExistenciaDeclaracionesConsumidor}',
         '${newReport.TipoMoneda}',
         '${newReport.TotalCreditosMaximosRevolventes}',
         '${newReport.TotalLimitesCreditoRevolventes}',
         '${newReport.TotalSaldosActualesRevolventes}',
         '${newReport.TotalSaldosVencidosRevolventes}',
         '${newReport.TotalPagosRevolventes}',
         '${newReport.PctLimiteCreditoUtilizadoRevolventes}',
         '${newReport.TotalCreditosMaximosPagosFijos}',
         '${newReport.TotalSaldosActualesPagosFijos}',
         '${newReport.TotalSaldosVencidosPagosFijos}',
         '${newReport.TotalPagosPagosFijos}',
         '${newReport.NumeroMOP96}',
         '${newReport.NumeroMOP97}',
         '${newReport.NumeroMOP99}',
         '${newReport.FechaAperturaCuentaMasAntigua}',
         '${newReport.FechaAperturaCuentaMasReciente}',
         '${newReport.TotalSolicitudesReporte}',
         '${newReport.FechaSolicitudReporteMasReciente}',
         '${newReport.NumeroTotalCuentasDespachoCobranza}',
         '${newReport.FechaAperturaCuentaMasRecienteDespachoCobranza}',
         '${newReport.NumeroTotalSolicitudesDespachosCobranza}',
         '${newReport.CodigoScore}',
         '${newReport.ValorScore}'
        )`
    database.query(query,
        (err, res) => {
            if (err) throw err;
            database.query(`INSERT INTO reportePersona VALUES (DEFAULT, ${res.insertId},'${id}' , NOW())`, (err, res) => {
                if (err) throw err;
                callback(res);
            })
        })
}

Report.getReportById = (id, callback) => {
    database.query(`SELECT
	reporte.*
FROM
	reporte
	INNER JOIN
	reportepersona
	ON 
		reporte.idReporte = reportepersona.idReporte
	WHERE reportepersona.fecha = (SELECT 
        MAX(fecha) 
        FROM 
        reportepersona 
        WHERE 
        idPersona = '${id}') `, (err, res) => {
        if (err) throw err;
        callback(res)
    })
}



module.exports = Report;