import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeDown,
  faBatteryThreeQuarters,
  faWifi,
  faSearch,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";
import { faApple, faBluetoothB } from "@fortawesome/free-brands-svg-icons";
import "./SecondPage.css";

class SecondPage extends React.Component {
  render() {
    return (
      <div className="second-page">
        <div className="mc-header">
          <ul className="left-header">
            <li>
              <FontAwesomeIcon className="icons" icon={faApple} />
            </li>
            <li>Finder</li>
            <li>파일</li>
            <li>편집</li>
            <li>보기</li>
            <li>이동</li>
            <li>윈도우</li>
            <li>도움말</li>
          </ul>
          <ul className="right-header">
            <li>
              <FontAwesomeIcon
                className="icons"
                icon={faVolumeDown}
                size="lg"
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="icons"
                icon={faBluetoothB}
                size="lg"
              />
            </li>
            <li>
              <FontAwesomeIcon
                className="icons"
                icon={faBatteryThreeQuarters}
                size="lg"
              />
            </li>
            <li>
              <FontAwesomeIcon className="icons" icon={faWifi} />
            </li>
            <li>
              <FontAwesomeIcon className="icons" icon={faSearch} />
            </li>
            <li>4월 8일 (목) 오후 3:15</li>
          </ul>
        </div>
        <div className="main-container">
          <div className="forders">
            <div className="forder">
              <FontAwesomeIcon
                className="icons"
                icon={faFolder}
                color="lightblue"
                size="4x"
              />
              <span className="forder-text">About</span>
            </div>
            <div className="forder">
              <FontAwesomeIcon
                className="icons"
                icon={faFolder}
                color="lightseagreen"
                size="4x"
              />
              <span className="forder-text">Skill</span>
            </div>
            <div className="forder">
              <FontAwesomeIcon
                className="icons"
                icon={faFolder}
                color="lightyellow"
                size="4x"
              />
              <span className="forder-text">Project</span>
            </div>
          </div>

          <div className="modal-page">
            <div className="page-header">
              <ul className="buttons">
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="input-text">
                <input type="text" placeholder="About" />
              </div>
              <div className="name">
                <span className="title">JW</span>
              </div>
            </div>
            <div className="page-main-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
