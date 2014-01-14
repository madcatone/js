
var fCountA = 0;
var fCountB = 0;
var fCountC = 0;
var fCountT = 0;

//$(document).ready(function () {
$(function (){

    $("#df1").click(function ()  {
        //$("#f1").hide();
        $("input[name='FileUpload1']").val("");
        
        fCountA = 0;
        //alert("!!1-4"+fCountA);
    });
    $("#df2").click(function ()  {
        //$("#f2").hide();
        $("input[name='FileUpload2']").val("");
        //alert("!!1-5");
        fCountB = 0;
    
    });
    $("#df3").click(function ()  {
        //$("#f2").hide();
        $("input[name='FileUpload3']").val("");
        //alert("!!1-5");
        fCountC = 0;
    
    });
    
    
    $("#Button1").click(function ()  {
        $("#f2").show();
        if ($("input[name='FileUpload1']").val() !== "") 
    {
        //alert("!!1-1");
        //$("#f2").show();
        fCountA = 1;
        
    }


    if ($("input[name='FileUpload2']").val() !== "") 
    {
        //$("#f3").show();
        //alert("!!1-2");
        fCountB = 1;
    }

     if ($("input[name='FileUpload3']").val() !== "") 
    {
        //$("#f3").show();
        //alert("!!1-2");
        fCountC = 1;
    }
        //alert(fCountC);
        //alert(fCountB);
        //alert(fCountA);
        fCountT=fCountA+fCountB+fCountC;
        //alert("total:"+fCountT);
        //fCount -= 1;
        //parent.uploadedFile('<%= ViewState["file1"]%>', '<%= ViewState["file2"]%>', '<%= ViewState["file3"]%>', fCountT);
    
    });






});

