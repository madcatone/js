$(function () {
    $("#searchpage img").click(function () {
    $("#searchGroup").show()
    .css("left", $(this).closest("#search_gourp").position().left)
    .css("top", $(this).closest("#search_gourp").position().top + $(this).closest("#search_gourp").height())
    .css("width", $(this).closest("#search_gourp").width() - $(this).closest("#search_gourp").find(".menu_search").width() - 3)

    .find("#close").click(function () {
    $("#searchGroup").hide();
        });
    });

    //allselect("txtJump");

    $('.emptydata').each(function () {
    $(this).parent().find('tr').first().hide();
        });

    var defaultStr = "搜尋訊息主旨";
    var text1 = $("#<%=searchKey.ClientID %>");
    var text2 = $("#<%=txtKeyword.ClientID %>");
    text1.val(text1.val() == "" ? defaultStr : text1.val()).css("color", "#787878")

    text1.focusin(function () {
    if ($(this).val() != "" && $(this).val() == defaultStr) {
        $(this).val("");
        }
    });

    text1.focusout(function () {
    $(this).val($(this).val() == "" ? defaultStr : $(this).val());
    text2.val($(this).val() == defaultStr ? "" : $(this).val());
        });

    text2.focusout(function () {
    text1.val($(this).val() == "" ? defaultStr : $(this).val());
        });

    $("[id$=vbtnSearch]").click(function () {
    var result = checkEndTime("txtStart", "txtEnd");
    if (!result) {
        $(".form-search img").click();
        alert("起訖時間異常，請確認開始時間是否大於結束時間!!");
        return false;
        }
    wait_process();
    });
});