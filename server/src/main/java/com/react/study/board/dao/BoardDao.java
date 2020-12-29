package com.react.study.board.dao;

import com.react.study.board.domain.BoardVO;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BoardDao {


    public List<BoardVO> list() {

        BoardVO vo = new BoardVO();
        vo.setTitle("제목입니다.");
        vo.setContent("내용입니다.");

        List<BoardVO> list = new ArrayList<>();
        list.add(vo);

        return list;
    }
}
