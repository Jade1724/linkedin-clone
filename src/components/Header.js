import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const Header = (props) => {
    return(
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <BiSearch />
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    ) 
    ;
}

const Container = styled.div`
    background-color: white;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    padding: 0 24px;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`;

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`

const Search = styled.div`
    opacity: 1;
    flex-grow: 1;
    position: relative;
    & > div {
        max-width: 280px;
        input {
            border: none;
            box-shadow: none;
            background-color: #eef3f8;
            color: rgba(0, 0, 0, 0.9);
            width: 218px;
            padding: 0 8px 0 40px;
            line-height: 1.75;
            font-weight: 400;
            font-size: 14px;
            height: 34px;
            vertical-align: text-top;
            outline-color: #dce6f1;
        }

        input:focus {
            outline: 2px solid rgb(10,102,194);
            border-radius: 2px;
        }

    }
`;

const SearchIcon = styled.div`
    width: 40px;
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 2px;
    border-radius: 0 2px 2px 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export default Header;