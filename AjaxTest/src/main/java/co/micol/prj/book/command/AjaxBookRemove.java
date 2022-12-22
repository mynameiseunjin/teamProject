package co.micol.prj.book.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.book.service.BookService;
import co.micol.prj.book.service.impl.BookServiceImpl;
import co.micol.prj.book.vo.BookVO;
import co.micol.prj.common.Command;

public class AjaxBookRemove implements Command {
	// 삭제
	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		String id = request.getParameter("id");
		BookService service = new BookServiceImpl();
		BookVO vo = new BookVO();
		vo.setBookCode(id);
		
		
		int delCnt = service.bookDelete(vo);
		String json = null;
		if(delCnt > 0) {
			//{"retCode":"Success", "id": id}
			json ="{\"retCode\":\"Success\", \"id\": "+ id + "}";
		}else {
			//{"retCode":"Fail"}
			json ="{\"retCode\":\"Fail\"}";
		}
		return "Ajax:" + json;
	}

}
