//取得登入里長的資料
		function getLoginMember() {
		    $.ajax({
		        async: false,
		        type: "POST",
		        contentType: "application/json",
		        url: "<%= System.Web.Configuration.WebConfigurationManager.AppSettings["ODH_URL"] %>/GetLoginMember",
		        data: "{PrimaryKey:'" + book_pk + "'}",
		        dataType: 'text',
		        error: function (r) {
		            //console.log(r);
		            alert('發生網路錯誤，請稍候重新再試。');
		        },
		        success: function (r) {
		            //console.log(r);
		            try {
		                var res = $.parseJSON(r);
		                var dat = res.d;
		                book_user.Name = dat.Name;
		                book_user.UnitCode = dat.UnitCode;
		                book_user.UnitName = dat.UnitName;
		                //console.log(book_user);
		                $('.user_name').html(book_user.Name + ' 里長');
		                var zid = book_user.UnitCode.substring(0, 8);
		                var zonename = $('#zone' + zid).html();
		                change_zone(zid, zonename);
		            } catch (e) {
		                //console.log(r);
		                alert('系統發生問題，請稍候再試。');
		            }
		        }
		    });
		}