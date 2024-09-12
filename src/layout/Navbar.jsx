import React, { useState } from 'react';
import './Navbar.style.css';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const genres = ['연극', '뮤지컬', '콘서트', '무용(서양/한국무용)', '대중무용', '서양음악(클래식)', '한국음악(국악)', '서커스/마술'];
  const genres_eng = ['theaters', 'musicals', 'concerts'];
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // 검색 기능 로직 추가 가능
    console.log("검색어1:", searchTerm);
    navigate (`${searchTerm}`)
  };
  return (
    <Container>
      <div className='nav-top'>
        <div className='nav-logo-search-area'>
          <a className="nav-logo" href="/">
            <img 
              width='200px' 
              src='https://www.creativefabrica.com/wp-content/uploads/2020/04/12/Ticket-Logo-Graphics-3851465-1.jpg'  
              alt="logo"
            />
          </a>
          <form  onSubmit={handleSearch}>
            <div className='nav-input-box'>
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
              <img 
                width='50px' 
                src='https://static.vecteezy.com/system/resources/previews/009/652/218/non_2x/magnifying-glass-icon-isolated-on-white-background-search-illustration-vector.jpg'  
                alt="search-icon"
                className='nav-search-icon'
                onClick={handleSearch}
              />
            </div>
          </form>
        </div>  
        <div className='nav-top-items'>
          <a href='login'>로그인</a>
          <a href='#!'>회원가입</a>
          <a href='my-select'>마이페이지</a>
        </div>
      </div>
      <div className='nav-bottom'>
        {genres.map((genre,idx) => (
          <a href={genres_eng[idx]?genres_eng[idx]:'#!'} key={idx}>{genre}</a>
        ))}
        <a className='text-gray'>  |  </a>
        <a href='rankings' className='main-color'>랭킹</a>
        <a href='regions' className='main-color'>지역별</a>
      </div>
    </Container>
  )
};

export default Navbar;