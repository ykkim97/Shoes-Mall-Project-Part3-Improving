import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import styles from "./MainNavbar.module.css";

//Navbar Part
function MainNavbar({isLogged, setIsLogged}) {
    // 로그아웃 함수
    const navigate = useNavigate();
    const signout = async () => {
        localStorage.clear()
        await signOut(auth);
        setIsLogged(false)
        navigate(0);
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" className={styles.NavbarDiv}>
                {/* variant="dark" */}
                <Container>
                <Navbar.Brand as={Link} to="/" className={styles.brand}>카페슈</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">  
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/man" title="남성신발">남성신발</Nav.Link>
                    <Nav.Link as={Link} to="/woman" title="여성신발">여성신발</Nav.Link>
                    <Nav.Link as={Link} to="/kids" title="키즈">키즈</Nav.Link>

                    {/* 이하 내용 : 카테고리 추가하고 싶을 때 사용하면됨. */}
                    {/* <NavDropdown title="남성신발" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">운동화/스니커즈/캐주얼</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">구두</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">샌들/슬리퍼/기타</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">양말/의류</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="여성신발" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/4.1">운동화/스니커즈/캐주얼</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.2">구두</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.3">샌들/슬리퍼/기타</NavDropdown.Item>
                    <NavDropdown.Item href="#action/4.4">양말/의류</NavDropdown.Item>
                    </NavDropdown> */}
                    
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="/watched" title="최근 본 상품">최근 본 상품</Nav.Link>
                    <Nav.Link as={Link} to="/cart" title="장바구니">장바구니</Nav.Link>
                    {isLogged && <Nav.Link as={Link} to="/mypage" title="마이페이지">마이페이지</Nav.Link>}
                    {/* 로그인 */}
                    {!isLogged && <Nav.Link as={Link} to="/auth" title="로그인">로그인</Nav.Link>}
                    {/* 로그아웃 */}
                    {isLogged && <Nav.Link onClick={signout} title="로그아웃">로그아웃</Nav.Link>}
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavbar;