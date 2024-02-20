import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Port from "../components/Port";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skip from "../components/Skip";
import Main from "../components/Main";

/**
 * 
 * 페이지를 나타내는 HomeView.jsx에는 다음과 같이 작성하겠습니다.
 * 이렇게 HomeView 컴포넌트를 사용하여 홈 페이지의 UI를 구성합니다. 
 * 각 컴포넌트들은 기능별로 분리되어 관리되므로, 코드의 가독성과 유지보수성이 좋아집니다. 
 * 이렇게 구성된 컴포넌트들을 조합하여 리액트 애플리케이션을 구축할 수 있습니다.
 * 
 */
const HomeView = () => {
    return (
    <div>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />
    </div>
    );
};

export default HomeView;
