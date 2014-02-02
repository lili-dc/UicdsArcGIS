// JavaScript Document
var globals = (function () {

	// core identification
	var coreUser = 'uicds';
	var coreAddress = 'https://uicds.spotonresponse.com';
	var incidentMgmtPath = '/uicds/core/ws/services/IncidentManagementService';
	var workproductPath = '/uicds/core/ws/services/ProductService';
	var mapPath = '/uicds/core/ws/services/MapService';

	// service namespaces
	var incidentmanagementNS = 'http://uicds.org/IncidentManagementService';
    var workproductNS = 'http://uicds.org/WorkProductService';
	
	

	// make them public
	return {
		coreUser: coreUser,
		coreAddress: coreAddress,
		incidentMgmtPath: incidentMgmtPath,
		workproductPath: workproductPath,
		mapPath: mapPath,
        incidentmanagementNS: incidentmanagementNS,
		workproductNS: workproductNS,
    };
}());

