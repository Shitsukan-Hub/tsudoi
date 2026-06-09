$(document).ready(function(){
	//サブメニュー・プルダウンメニューのスタイルを先に読み込ませる
	$("#leftmenu ul li a").css("display","block");
	$("#gnav ul li ul li a").css("display","block");
	$("footer ul li a").css("display","block");
	
	$("#wrap a",this).each(function(){
		if($(this).attr("href") != undefined && !$(this).is(":has('img')")){
			var $this = $(this);
			if($this.attr("href").match(".pdf$")){
				if($this.css("display") == 'block'){
					$this.append("<img src='/tsudoi/common/img/ic_pdf.gif' width='10' height='12' class='icon' />");
				}else{
					$this.after("<img src='/tsudoi/common/img/ic_pdf.gif' width='10' height='12' class='icon' />");
				}
			}else if($this.attr("href").match(".doc$") || $this.attr("href").match(".docx$")){
				if($this.css("display") == 'block'){
					$this.append("<img src='/tsudoi/common/img/ic_word.gif' width='10' height='12' class='icon' />");
				}else{
					$this.after("<img src='/tsudoi/common/img/ic_word.gif' width='10' height='12' class='icon' />");
				}
			}else if($this.attr("href").match(".xls$") || $this.attr("href").match(".xlsx$")){
				if($this.css("display") == 'block'){
					$this.append("<img src='/tsudoi/common/img/ic_excel.gif' width='10' height='12' class='icon' />");
				}else{
					$this.after("<img src='/tsudoi/common/img/ic_excel.gif' width='10' height='12' class='icon' />");
				}
			}else if($this.attr("target") == "_blank"){
				if($this.css("display") == 'block'){
					$this.append("<img src='/tsudoi/common/img/ic_newwin.gif' width='11' height='11' class='icon' />");
				}else{
					$this.after("<img src='/tsudoi/common/img/ic_newwin.gif' width='11' height='11' class='icon' />");
				}
			}
		}
	});
});


