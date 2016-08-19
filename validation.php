<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Validation</title>
<link rel="stylesheet" href="assets/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/font-awesome.css">
<script type="text/javascript" src="assets/js/jquery.min.js"></script>
</head>

<body><br><br>
<form class="form-horizontal" id="formValidation">
    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">Text<span class="text-danger">*</span></label>
        <div class="col-sm-6">
            <input type="text" name="text" id="text" class="form-control" placeholder="Normal Text checking">
        </div>
    </div>
    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">Email<span class="text-danger">*</span></label>
        <div class="col-sm-6">
            <input type="text" name="email" id="email" class="form-control" placeholder="Email checking">
        </div>
    </div>
    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">Number<span class="text-danger">*</span></label>
        <div class="col-sm-6">
            <input type="text" name="number" id="number" class="form-control" placeholder="Numeric checking">
        </div>
    </div>
    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">Url<span class="text-danger">*</span></label>
        <div class="col-sm-6">
            <input type="text" name="url" id="url" class="form-control" placeholder="URL checking">
        </div>
    </div>
    <div class="form-group">
        <label for="task" class="col-sm-3 control-label">File<span class="text-danger">*</span></label>
        <div class="col-sm-6">
            <input type="file" name="file" id="file" class="form-control" placeholder="File Type checking">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-offset-3 col-sm-6">
            <button type="submit" class="btn btn-default">Submit</button>
        </div>
    </div>
</form>
</body>
</html>
<script type="text/javascript" src="assets/js/webvalidation.1.0.js"></script>
<script>
   jQuery("#formValidation").submit(function(){
    var text = jQuery("#text").val();
    var email = jQuery("#email").val();
    var number = jQuery("#number").val();
    var url = jQuery("#url").val();
    var file = jQuery("#file");
    var fileLength = file[0].files.length; // get length
    var fileItems = file[0].files;
    var fragment = "";
    var fileName = '';
    if (fileLength > 0) {
    for (var i = 0; i < fileLength; i++) {
        fileName = fileItems[i].name; // get file name
        //var fileSize = fileItems[i].size; // get file size 
        //var fileType = fileItems[i].type; // get file type
    }
    }
    //var extension = new Array("jpg", "jpeg", "png");
    var extension = ["jpg", "jpeg", "png"];
    var chk_fld1=webvalidation('{"validation":"commoncheck","name":"Text","id":"text","value":"'+text+'","max":50,"min":5}');
    var chk_fld2=webvalidation('{"validation":"emailcheck","required":"true","name":"Email","id":"email","value":"'+email+'"}');
    var chk_fld3=webvalidation('{"validation":"numbercheck","required":"true","name":"Number","id":"number","value":"'+number+'","max":10,"min":10}');
    var chk_fld4=webvalidation('{"validation":"urlcheck","required":"true","name":"Url","id":"url","value":"'+url+'"}');
    var chk_fld5=webvalidation('{"validation":"filetypecheck","type":"'+extension+'","required":"true","name":"File","id":"file","value":"'+fileName+'"}');
    if (chk_fld1 == false || chk_fld2 == false || chk_fld3 == false || chk_fld4 == false || chk_fld5 == false) {
        //showAlerts();
        return false;
    }
    
   });
</script>
