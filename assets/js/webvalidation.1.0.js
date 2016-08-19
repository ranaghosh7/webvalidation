/*! WEBVALIDATION v1.0 | MAY 2016
 *DEVELOPED BY RANA
*/
//var msgToShow = '';
function webvalidation(data){
    data = jQuery.parseJSON(data);

    var required = 'false';var validation = data.validation;var name = data.name;var id = data.id;var value = data.value.trim();var max = data.max;var min = data.min;
    if (data.required == 'true') {
        required = data.required;
    }
    var dataType = data.type;
    if (dataType!='' && dataType!=undefined) {
        var splittedType = dataType.split(',');
        dataType = new Array();
        for (i = 0; i < splittedType.length; i++) {
        dataType.push(splittedType[i]);
        }
    }
    var length = value.length;
    var privateWebValidation = function(){
        var returnValue = 0;var msgToShow = '';
        switch (validation) {
            case 'commoncheck':
                if(value.search(/\S/)==-1){
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(length<min){
                    //msgToShow += '<li>'+name+' field length should be greater than '+min+'.</li>';
                    msgToShow = name+' field length should be greater than '+min+'.';
                }else if(length>max){
                    //msgToShow += '<li>'+name+' field length should be less than '+max+'.</li>';
                    msgToShow = name+' field length should be less than '+max+'.';
                }else{
                    returnValue = 1;
                }
                break;
            case 'emailcheck':
                var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                if(value.search(/\S/)==-1 && required =='true')
                {
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(!ck_email.test(value) && value.search(/\S/)!=-1)
                {
                    //msgToShow += '<li>Please enter a valid '+name+'.</li>';
                    msgToShow = 'Please enter a valid '+name+'.';
                }else{
                    returnValue = 1;
                }
                break;
            case 'numbercheck':
                if(value.search(/\S/)==-1 && required =='true')
                {
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(isNaN(value) == true && value.search(/\S/)!=-1){
                    //msgToShow += '<li>'+name+' field should be numeric.</li>';
                    msgToShow = name+' field should be numeric.';
                }else if(length<min && value.search(/\S/)!=-1){
                    //msgToShow += '<li>'+name+' field length should be greater than '+min+'.</li>';
                    msgToShow = name+' field length should be greater than '+min+'.';
                }else if(length>max && value.search(/\S/)!=-1){
                    //msgToShow += '<li>'+name+' field length should be less than '+max+'.</li>';
                    msgToShow = name+' field length should be less than '+max+'.';
                }else{
                    returnValue = 1;
                }
                break;
            case 'urlcheck':
                var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
                if(value.search(/\S/)==-1 && required =='true')
                {
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(!re.test(value) && value.search(/\S/)!=-1)
                {
                    //msgToShow += '<li>Please enter a valid '+name+'.</li>';
                    msgToShow = 'Please enter a valid '+name+'.';
                }else{
                    returnValue = 1;
                }
                break;
            case 'filetypecheck':
                var extention=value.substr(value.lastIndexOf('.') +1);
                if(value.search(/\S/)==-1 && required =='true')
                {
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(dataType.indexOf(extention) == -1 && value.search(/\S/)!=-1)
                {
                    //msgToShow += '<li>Please select a valid '+name+'.</li>';
                    msgToShow = 'Please select a valid '+name+'.';
                }else{
                    returnValue = 1;
                }
                break;
            default:
                if(value.search(/\S/)==-1){
                    //msgToShow += '<li>'+name+' field is required.</li>';
                    msgToShow = name+' field is required.';
                }else if(length<min){
                    //msgToShow += '<li>'+name+' field length should be greater than '+min+'.</li>';
                    msgToShow = name+' field length should be greater than '+min+'.';
                }else if(length>max){
                    //msgToShow += '<li>'+name+' field length should be less than '+max+'.</li>';
                    msgToShow = name+' field length should be less than '+max+'.';
                }else{
                    returnValue = 1;
                }
        }
        if (returnValue == 0) {
            if (!jQuery('#'+name+'-error').length) {
                jQuery('#'+id).after('<span id="'+name+'-error" style="color:#ee0101;">'+msgToShow+'</span>');
            }else{
                jQuery('#'+name+'-error').html('<span id="'+name+'-error" style="color:#ee0101;">'+msgToShow+'</span>');
            }
        }else if (returnValue == 1) {
            jQuery('#'+name+'-error').remove();
        }
        return returnValue;
    }
    return privateWebValidation();
}
function showAlerts(){
    Lobibox.alert('error', //AVAILABLE TYPES: "error", "info", "success", "warning"
    {
    msg: "<ul>"+msgToShow+"</ul>"
    });
    msgToShow = '';
}