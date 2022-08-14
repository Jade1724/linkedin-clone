import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModal from "./PostModal";

import { TailSpin } from "react-loader-spinner";

import { HiOutlinePhotograph } from "react-icons/hi";
import { MdVideoLibrary, MdArticle } from "react-icons/md";
import { BsThreeDots, BsChatText } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import { FaHandsWash } from "react-icons/fa";
import { CgMailForward } from "react-icons/cg";
import { RiSendPlaneFill } from "react-icons/ri";

const Main = (props) => {
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();
    if (e.target !== e.currentTarget) {
      return;
    }
    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src={[props.user.photoURL]} />
          ) : (
            <img src="/images/user.svg" alt="" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
        <div>
          <button>
            <HiOutlinePhotograph
              style={{ color: "#4496EA", width: "24px", height: "24px" }}
            />
            <span>Photo</span>
          </button>

          <button>
            <MdVideoLibrary
              style={{ color: "#5F9B41", width: "24px", height: "24px" }}
            />
            <span>Video</span>
          </button>

          <button>
            <HiOutlinePhotograph
              style={{ color: "#C37D16", width: "24px", height: "24px" }}
            />
            <span>Event</span>
          </button>

          <button>
            <MdArticle
              style={{ color: "#E16745", width: "24px", height: "24px" }}
            />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Content>
        {props.loading && <TailSpin color="#00BFFF" height={30} width={30} wrapperStyle={{display: "flex", justifyContent: "center"}}/>}
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Data</span>
              </div>
            </a>
            <button>
              <BsThreeDots />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a>
              <img src="/images/blender-day-4.png" alt="" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <FiThumbsUp />
                <FaHandsWash />
                <span>75</span>
              </button>
            </li>
            <li>
              <a>2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <FiThumbsUp />
              <span>Like</span>
            </button>
            <button>
              <BsChatText />
              <span>Comments</span>
            </button>
            <button>
              <CgMailForward />
              <span>Share</span>
            </button>
            <button>
              <RiSendPlaneFill />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </Content>
      <PostModal showModal={showModal} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20px);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b95;
  margin: 0 0 8px;
  background: white;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        svg {
          margin: 0 4px 0 -2px;
        }
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
    }

    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;

    svg {
      font-size: 24px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5df;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;

      &:first-child {
        color: #1159a2;
      }

      &:nth-child(2) {
        color: #518345;
      }
    }
  }
`;

const SocialActions = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button {
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    svg {
      font-size: 24px;
    }

    @media (min-width: 768px) {
      span {
        margin-left: 8px;
      }
    }
  }
`;

const Content = styled.div`
  text-align: center;
`;

const mapStateToProps = (state) => {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Main);
