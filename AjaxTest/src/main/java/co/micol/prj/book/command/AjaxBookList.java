package co.micol.prj.book.command;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import co.micol.prj.book.service.BookService;
import co.micol.prj.book.service.impl.BookServiceImpl;
import co.micol.prj.book.vo.BookVO;
import co.micol.prj.common.Command;

public class AjaxBookList implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 도서목록조회
		BookService service = new BookServiceImpl();
		List<BookVO> list = service.bookSelectList();
		ObjectMapper mapper = new ObjectMapper();
		
		 String json = null;
		try {
			json = mapper.writeValueAsString(list);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		return "Ajax:" +  json;
	}

}
