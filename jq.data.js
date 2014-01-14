//--------------------------------------------------------------------------------
// Generate By NO2AjaxGenerator.
// No2don is no warranty for this document works correctly.
// If you have any questions.You can  feel free mail to no2don@gmail.com
// Github: https://github.com/donma/JqueryAjaxGenerator
//--------------------------------------------------------------------------------


//---------------------------------------------------------------------------//
//-----------------------------Object Models--------------------------------//
//--------------------------------------------------------------------------//

// -- VillageCaseItemModel
function VillageCaseItemModel() {
    /// <summary>VillageCaseItemModel</summary>
    VillageCaseItemModel.prototype.IsSuccess = '';
    VillageCaseItemModel.prototype.ErrorNum = '';
    VillageCaseItemModel.prototype.ErrorMessage = '';
    VillageCaseItemModel.prototype.Items = new Array();
}

// -- Items
var Items = new Array();

// -- Item
function Item() {
    /// <summary>Item</summary>
    Item.prototype.ItemID = '';
    Item.prototype.MstName = '';
    Item.prototype.ItemName = '';
    Item.prototype.Template = '';
}

// -- VillageSetCaseModel
function VillageSetCaseModel() {
    /// <summary>VillageSetCaseModel</summary>
    VillageSetCaseModel.prototype.IsSuccess = '';
    VillageSetCaseModel.prototype.CasePK = '';
    VillageSetCaseModel.prototype.CaseId = '';
    VillageSetCaseModel.prototype.ErrorNum = '';
    VillageSetCaseModel.prototype.ErrorMessage = '';
}

// -- DeleteVillageCaseModel
function DeleteVillageCaseModel() {
    /// <summary>DeleteVillageCaseModel</summary>
    DeleteVillageCaseModel.prototype.IsSuccess = '';
    DeleteVillageCaseModel.prototype.ErrorNum = '';
    DeleteVillageCaseModel.prototype.ErrorMessage = '';
}

// -- VillageCaseStatusModel
function VillageCaseStatusModel() {
    /// <summary>VillageCaseStatusModel</summary>
    VillageCaseStatusModel.prototype.IsSuccess = '';
    VillageCaseStatusModel.prototype.ErrorNum = '';
    VillageCaseStatusModel.prototype.ErrorMessage = '';
    VillageCaseStatusModel.prototype.AllCount = '';
    VillageCaseStatusModel.prototype.CurrentRow = '';
    VillageCaseStatusModel.prototype.RtnPage = '';
    VillageCaseStatusModel.prototype.CasePK = '';
    VillageCaseStatusModel.prototype.CaseId = '';
    VillageCaseStatusModel.prototype.ShortId = '';
    VillageCaseStatusModel.prototype.QueryKey = '';
    VillageCaseStatusModel.prototype.VillageId = '';
    VillageCaseStatusModel.prototype.ItemID = '';
    VillageCaseStatusModel.prototype.MstName = '';
    VillageCaseStatusModel.prototype.ItemName = '';
    VillageCaseStatusModel.prototype.SendTime = '';
    VillageCaseStatusModel.prototype.FinishTime = '';
    VillageCaseStatusModel.prototype.CaseContent = '';
    VillageCaseStatusModel.prototype.IsPub = '';
    VillageCaseStatusModel.prototype.City = '';
    VillageCaseStatusModel.prototype.Zone = '';
    VillageCaseStatusModel.prototype.Road = '';
    VillageCaseStatusModel.prototype.LampId = '';
    VillageCaseStatusModel.prototype.Lat = '';
    VillageCaseStatusModel.prototype.Lnt = '';
    VillageCaseStatusModel.prototype.Status = '';
    VillageCaseStatusModel.prototype.FeedbackUrl = '';
    VillageCaseStatusModel.prototype.IsFeedback = '';
    VillageCaseStatusModel.prototype.Bureaus = '';
}

// -- BureauModel
function BureauModel() {
    /// <summary>BureauModel</summary>
    BureauModel.prototype.host = '';
    BureauModel.prototype.coOrganizers = new Array();
}

// -- hosts
function hosts() {
    /// <summary>hosts</summary>
    hosts.prototype.bureau = '';
    hosts.prototype.bureauOUID = '';
    hosts.prototype.statusDesc = '';
}

// -- CoOrganizers
var CoOrganizers = new Array();

// -- coOrganizer
function coOrganizer() {
    /// <summary>coOrganizer</summary>
    coOrganizer.prototype.bureau = '';
    coOrganizer.prototype.bureauOUID = '';
}

// -- VillageCaseListModel
function VillageCaseListModel() {
    /// <summary>VillageCaseListModel</summary>
    VillageCaseListModel.prototype.IsSuccess = '';
    VillageCaseListModel.prototype.ErrorNum = '';
    VillageCaseListModel.prototype.ErrorMessage = '';
    VillageCaseListModel.prototype.AllCount = '';
    VillageCaseListModel.prototype.Cases = new Array();
}

// -- Cases
var Cases = new Array();

// -- Case
function Case() {
    /// <summary>Case</summary>
    Case.prototype.CasePK = '';
    Case.prototype.CaseId = '';
    Case.prototype.ItemId = '';
    Case.prototype.MstName = '';
    Case.prototype.ItemName = '';
    Case.prototype.bureau = '';
    Case.prototype.bureauOUID = '';
    Case.prototype.status = '';
    Case.prototype.CaseTime = '';
    Case.prototype.CaseContent = '';
    Case.prototype.feedbackUrl = '';
    Case.prototype.isFeedback = '';
    Case.prototype.isRead = '';
}

// -- UploadFiles
function UploadFiles() {
    /// <summary>UploadFiles</summary>
    UploadFiles.prototype.IsSuccess = '';
    UploadFiles.prototype.ErrorNum = '';
    UploadFiles.prototype.ErrorMessage = '';
}

// -- DeleteFiles
function DeleteFiles() {
    /// <summary>DeleteFiles</summary>
    DeleteFiles.prototype.IsSuccess = '';
    DeleteFiles.prototype.ErrorNum = '';
    DeleteFiles.prototype.ErrorMessage = '';
}

// -- CaseFileListModel
function CaseFileListModel() {
    /// <summary>CaseFileListModel</summary>
    CaseFileListModel.prototype.IsSuccess = '';
    CaseFileListModel.prototype.ErrorNum = '';
    CaseFileListModel.prototype.ErrorMessage = '';
    CaseFileListModel.prototype.AllCount = '';
    CaseFileListModel.prototype.Cases = new Array();
}

// -- CaseFiless
var CaseFiless = new Array();

// -- CaseFiles
function CaseFiles() {
    /// <summary>CaseFiles</summary>
    CaseFiles.prototype.FilePK = '';
    CaseFiles.prototype.FileName = '';
    CaseFiles.prototype.FileSize = '';
    CaseFiles.prototype.Url = '';
    CaseFiles.prototype.SmallUrl = '';
}



//-----------------------------Methods---------------------------------//

// -- VillageCaseItem
function VillageCaseItem(successFunc, errorFunc) {
    /// <summary>取得通報類別項目</summary>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="VillageCaseItemModel">VillageCaseItemRoot as VillageCaseItemModel</returns>
    var $res = new VillageCaseItemModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:49186/New_WebService/webservice/CaseWS.asmx/VillageCaseItem",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: '',
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- VillageSetCase
function VillageSetCase(Fun, CasePK, UserPK, CaseItemId, MstName, ItemName, Content, IsPub, City, Zone, Road, Lat, Lnt, LampId, successFunc, errorFunc) {
    /// <summary>新增/修改通報</summary>
    /// <param name="Fun" type="string">Fun</param>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="CaseItemId" type="string">CaseItemId</param>
    /// <param name="MstName" type="string">MstName</param>
    /// <param name="ItemName" type="string">ItemName</param>
    /// <param name="Content" type="string">Content</param>
    /// <param name="IsPub" type="boolean">IsPub</param>
    /// <param name="City" type="string">City</param>
    /// <param name="Zone" type="string">Zone</param>
    /// <param name="Road" type="string">Road</param>
    /// <param name="Lat" type="string">Lat</param>
    /// <param name="Lnt" type="string">Lnt</param>
    /// <param name="LampId" type="string">LampId</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="VillageSetCaseModel">VillageSetCaseRoot as VillageSetCaseModel</returns>
    var $res = new VillageSetCaseModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/VillageSetCase",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{Fun:" + JSON.stringify(Fun) + ",CasePK:" + JSON.stringify(CasePK) + ",UserPK:" + JSON.stringify(UserPK) + ",CaseItemId:" + JSON.stringify(CaseItemId) + ",MstName:" + JSON.stringify(MstName) + ",ItemName:" + JSON.stringify(ItemName) + ",Content:" + JSON.stringify(Content) + ",IsPub:" + JSON.stringify(IsPub) + ",City:" + JSON.stringify(City) + ",Zone:" + JSON.stringify(Zone) + ",Road:" + JSON.stringify(Road) + ",Lat:" + JSON.stringify(Lat) + ",Lnt:" + JSON.stringify(Lnt) + ",LampId:" + JSON.stringify(LampId) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- DeleteVillageCase
function DeleteVillageCase(CasePK, UserPK, successFunc, errorFunc) {
    /// <summary>刪除通報</summary>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="DeleteVillageCaseModel">DeleteVillageCaseRoot as DeleteVillageCaseModel</returns>
    var $res = new DeleteVillageCaseModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/DeleteVillageCase",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{CasePK:" + JSON.stringify(CasePK) + ",UserPK:" + JSON.stringify(UserPK) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- VillageCaseStatus
function VillageCaseStatus(UserPK, CasePK, KeyWord, StartDate, EndDate, Action, ListType, SearchType, rowsPrePage, successFunc, errorFunc) {
    /// <summary>取得通報案件狀態</summary>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="KeyWord" type="string">KeyWord</param>
    /// <param name="StartDate" type="dateTime">StartDate</param>
    /// <param name="EndDate" type="dateTime">EndDate</param>
    /// <param name="Action" type="string">Action</param>
    /// <param name="ListType" type="string">ListType</param>
    /// <param name="SearchType" type="string">SearchType</param>
    /// <param name="rowsPrePage" type="string">rowsPrePage</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="VillageCaseStatusModel">VillageCaseStatusRoot as VillageCaseStatusModel</returns>
    var $res = new VillageCaseStatusModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/VillageCaseStatus",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{UserPK:" + JSON.stringify(UserPK) + ",CasePK:" + JSON.stringify(CasePK) + ",KeyWord:" + JSON.stringify(KeyWord) + ",StartDate:" + JSON.stringify(StartDate) + ",EndDate:" + JSON.stringify(EndDate) + ",Action:" + JSON.stringify(Action) + ",ListType:" + JSON.stringify(ListType) + ",SearchType:" + JSON.stringify(SearchType) + ",rowsPrePage:" + JSON.stringify(rowsPrePage) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- VillageCaseList
function VillageCaseList(UserPK, rowsPrePage, PageNum, KeyWord, StartDate, EndDate, ListType, SearchType, successFunc, errorFunc) {
    /// <summary>取得通報列表</summary>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="rowsPrePage" type="string">rowsPrePage</param>
    /// <param name="PageNum" type="int">PageNum</param>
    /// <param name="KeyWord" type="string">KeyWord</param>
    /// <param name="StartDate" type="dateTime">StartDate</param>
    /// <param name="EndDate" type="dateTime">EndDate</param>
    /// <param name="ListType" type="string">ListType</param>
    /// <param name="SearchType" type="string">SearchType</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="VillageCaseListModel">VillageCaseListRoot as VillageCaseListModel</returns>
    var $res = new VillageCaseListModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/VillageCaseList",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{UserPK:" + JSON.stringify(UserPK) + ",rowsPrePage:" + JSON.stringify(rowsPrePage) + ",PageNum:" + JSON.stringify(PageNum) + ",KeyWord:" + JSON.stringify(KeyWord) + ",StartDate:" + JSON.stringify(StartDate) + ",EndDate:" + JSON.stringify(EndDate) + ",ListType:" + JSON.stringify(ListType) + ",SearchType:" + JSON.stringify(SearchType) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- UploadCaseFile
function UploadCaseFile(CasePK, UserPK, FileStream, FileName, successFunc, errorFunc) {
    /// <summary>上傳通報附件</summary>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="FileStream" type="string">FileStream</param>
    /// <param name="FileName" type="string">FileName</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="UploadFiles">UploadFiles as UploadFiles</returns>
    var $res = new UploadFiles();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/UploadCaseFile",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{CasePK:" + JSON.stringify(CasePK) + ",UserPK:" + JSON.stringify(UserPK) + ",FileStream:" + JSON.stringify(FileStream) + ",FileName:" + JSON.stringify(FileName) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- DeleteCaseFile
function DeleteCaseFile(UserPK, CasePK, AttachmentPK, successFunc, errorFunc) {
    /// <summary>刪除通報附件</summary>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="AttachmentPK" type="string">AttachmentPK</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="DeleteFiles">DeleteFiles as DeleteFiles</returns>
    var $res = new DeleteFiles();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/DeleteCaseFile",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{UserPK:" + JSON.stringify(UserPK) + ",CasePK:" + JSON.stringify(CasePK) + ",AttachmentPK:" + JSON.stringify(AttachmentPK) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

// -- CaseFileList
function CaseFileList(UserPK, CasePK, successFunc, errorFunc) {
    /// <summary>取得通報附件列表</summary>
    /// <param name="UserPK" type="string">UserPK</param>
    /// <param name="CasePK" type="string">CasePK</param>
    /// <param name="successFunc" type="function">Success Function</param>
    /// <param name="errorFunc" type="function">Error Function</param>
    /// <returns type="CaseFileListModel">CaseFileListRoot as CaseFileListModel</returns>
    var $res = new CaseFileListModel();
    $.ajax({
        type: "POST",
        url: "http://localhost:1111/New_WebService/webservice/CaseWS.asmx/CaseFileList",
        contentType: "application/json; charset=utf-8",
        async: false,
        cache: false,
        dataType: 'json',
        data: "{UserPK:" + JSON.stringify(UserPK) + ",CasePK:" + JSON.stringify(CasePK) + "}",
        success: function (data) {
            if (data.hasOwnProperty("d")) {
                $res = data.d;
                if (successFunc != null)
                    successFunc(data.d);
            }
            else {
                $res = data;
                if (successFunc != null)
                    successFunc(data);
            }
        },
        error: function () {
            if (errorFunc != null)
                errorFunc();
        }


    });
    return $res;
}

