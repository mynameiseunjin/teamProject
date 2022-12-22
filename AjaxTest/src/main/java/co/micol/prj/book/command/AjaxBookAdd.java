package co.micol.prj.book.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.micol.prj.book.service.BookService;
import co.micol.prj.book.service.impl.BookServiceImpl;
import co.micol.prj.book.vo.BookVO;
import co.micol.prj.common.Command;

public class AjaxBookAdd implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 삽입동네
		//int bookInsert(BookVO vo);
		BookVO vo = new BookVO();
		
		vo.setBookCode(request.getParameter("bookCode"));
		vo.setBookTitle(request.getParameter("bookTitle"));
		vo.setBookAuthor(request.getParameter("bookAuthor"));
		System.out.println(request.getParameter("bookAuthor"));
		
		vo.setBookPress(request.getParameter("bookPress"));
		
		System.out.println(request.getParameter("bookPrice"));
		vo.setBookPrice(Integer.parseInt(request.getParameter("bookPrice")));
		
		BookService service = new BookServiceImpl();
		service.bookInsert(vo);
		
		String json = null;
		ObjectMapper mapper = new ObjectMapper();
		try {
			json = mapper.writeValueAsString(vo);
			
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return "Ajax:" + json;
	}

}
