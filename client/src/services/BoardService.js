import axios from 'axios'

const BOARD_LIST_REST_API_URL = 'http://localhost:8080/board/list';

class BoardService{
    getList(){
        return axios.get(BOARD_LIST_REST_API_URL); 
    }
}

export default new BoardService();