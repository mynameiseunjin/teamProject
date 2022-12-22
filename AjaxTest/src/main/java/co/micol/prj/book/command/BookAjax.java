package co.micol.prj.book.command;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.micol.prj.common.Command;

public class BookAjax implements Command {

	@Override
	public String exec(HttpServletRequest request, HttpServletResponse response) {
		// 호출
		return "book/bookForm.tiles";
	}

}
