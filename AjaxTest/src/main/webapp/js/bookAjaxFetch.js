/**
 * bookAjaxfetch.js
 */

const showFields = {
	bookCode: "도서코드",
	bookTitle: "도서명",
	bookAuthor: "저자",
	bookPress: "출판사",
	bookPrice: "가격"
}

const addColumn2 = {
	col1: ['input', 'checkbox'],
}
const addColumn = {
	col1: ['button', '삭제'],
}

function makeTable(aryData = [],parent) {
	let tbl = document.createElement('table')
	tbl.setAttribute('border', '1')
	let thd = document.createElement('thead')
	let tbd = document.createElement('tbody')
	let tr = document.createElement('tr')

	let fields = showFields; //보여줄 항목을 지정(전체항목);
	// head영역.
	console.log(fields)
	for(const col in addColumn2){
		let th = document.createElement('th')
		th.innerHTML = addColumn2[col][0] == 'button' ? addColumn2[col][1] : '<input type="checkbox">'; //'button'
		tr.append(th)
	}
	for (const field in fields) {
		let th = document.createElement('th')
		th.innerText = fields[field];
		tr.append(th);
	}
	// 추가항목.
	for (const col in addColumn) {
		let th = document.createElement('th')
		th.innerHTML = addColumn[col][0] == 'button' ? addColumn[col][1] : '<input type="checkbox">'; //'button'
		tr.append(th)
	}
	thd.append(tr);
	tbl.append(thd);
	

	//body 영역
	for (const data of aryData) {
		let tr = makeTr(data);
		tbd.append(tr);
	}
	
	tbl.append(tbd)
	parent.append(tbl);
	
}

function makeTr(data) {
	tr = document.createElement('tr')
	for (const col in addColumn2) {
		let td = document.createElement('td')
		let elem = document.createElement(addColumn2[col][0])
		elem.setAttribute('class','cancelbtn')
		elem.innerText = addColumn2[col][1];
		if (addColumn2[col][0] == 'input' ){
			elem.setAttribute('type', addColumn2[col][1])
		}
		td.append(elem);
		tr.append(td);
	}

	for (const field in showFields) {
		let td = document.createElement('td')
		td.innerText = data[field]
		tr.append(td);
	}
	//추가항목.
for (const col in addColumn) {
		let td = document.createElement('td')
		let elem = document.createElement(addColumn[col][0])
		elem.setAttribute('class','cancelbtn')
		elem.innerText = addColumn[col][1];
		if (addColumn[col][0] == 'input' ){
			elem.setAttribute('type', addColumn[col][1])
		}
		td.append(elem);
		tr.append(td);
	}
	
	return tr;
}
fetch('ajaxBookList.do')
	.then((result) => result.json()) // stream -> object.
	.then((data) => {
		console.log(data);
		const pel = document.getElementById('show')
		makeTable(data, pel);
		let trs = document.querySelectorAll('#show tbody tr');
		for (const trElem of trs) {
			
			trElem.setAttribute('id', 'book_' + trElem.children[1].textContent)
			//삭제버튼
			trElem.querySelector('td:nth-child(7)>button').addEventListener('click', delAjaxFnc)
		}
	
	})
	
	.catch(function(err) {
		console.log(err);
	})
	
function delAjaxFnc(e) {
	e.stopPropagation();
	let id = this.parentElement.parentElement.getAttribute('id');
	id = id.substring(4); //
	fetch('ajaxBookDel.do', {
		method: 'post',//페이지 요청 방식 지정,get,post요청(추가,수정,삭제)
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
			//application/json,mulipart/form-data
		},
		body: 'id=' + id
	})
		.then(result => result.json())
		.then(result => {
			if (result.retCode == 'Success') {
				document.querySelector('#book_' + result.id).remove() //id값으로 element 찾아서 제거
			} else if (result.retCode == 'Fail') {
				alert('처리 중 오류.')
			}
		})
		.catch(err => console.log(err))
}	
