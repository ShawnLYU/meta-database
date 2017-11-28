$(document).ready(function(){
	// $.ajax({
 //        url: '/acquire_missions/',
 //        type: 'POST',
 //    }).done(function(callback){
 //        console.log(callback);

 //    });
    
    $('#mission_list').DataTable( {
        "ajax": "/respiratory_microbial_gene_catalogue/acquire_missions/",
        "columns": [
            { 'data': 'title' },
            { 'data': 'status' },
            { 'data': 'create_date' },
        ]
    } );
});