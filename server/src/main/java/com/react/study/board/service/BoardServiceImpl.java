package com.react.study.board.service;

import com.react.study.board.dao.BoardDao;
import com.react.study.board.domain.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardDao boardDao;



    @Override
    public List<BoardVO> list() {
        return boardDao.list();
    }
}
