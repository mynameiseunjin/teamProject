<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>I도서목록 </title>
<script src="js/bookAjaxFetch.js"></script>
</head>
<body>
<h3>도서 목록</h3>
	<div>
		<form name="bookFrm" action="ajaxBookList.do" method="post">
			<table>
				<tr>
					<th><label for="code">도서코드</label></th>
					<td><input type="text" name="bookCode" id="code"
						></td>
				</tr>
				<tr>
					<th><label for="title">도서명</label></th>
					<td><input type="text" name="bookTitle" id="title"
						></td>
				</tr>
					<tr>
					<th><label for="author">저자</label></th>
					<td><input type="text" name="bookAuthor" id="author"
						></td>
				</tr>
					<tr>
					<th><label for="press">출판사</label></th>
					<td><input type="text" name="bookPress" id="press"
						></td>
				</tr>
					<tr>
					<th><label for="price">가격</label></th>
					<td><input type="number" name="bookPrice" id="price"
						></td>
				</tr>

				<tr>
				<td colspan="2">
						<input type="submit" value="저장">
						<input type="submit" value="선택삭제">
				</tr>
				
			</table>
		</form>
	</div>
	<div id="show"></div>
</body>
</html>