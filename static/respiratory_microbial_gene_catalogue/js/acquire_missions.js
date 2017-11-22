$(document).ready(function(){
	var table = $('#mission_list').dataTable( {
	    "ajax": "/acquire_missions",
	    "columns": [
		    { "data": "title" ,
		        "fnCreatedCell": function (nTd, sData, oData, iRow, iCol) {
		            $(nTd).html("<a href='javascript:missionRequest("+oData.title+")'>"+oData.TelephoneNumber+"</a>");
		        }},
		    { "data": "status" },
		    { "data": "create_date" },
	            ]
	}).columnFilter();
});