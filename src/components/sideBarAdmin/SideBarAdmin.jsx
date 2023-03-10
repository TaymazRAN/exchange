import "./sideBarAdmin.css";
import React from "react";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
// import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import AppsIcon from "@mui/icons-material/Apps";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
// import InventoryIcon from "@mui/icons-material/Inventory";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WidgetsRoundedIcon from "@mui/icons-material/WidgetsRounded";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import { Button } from "@mui/material";

export default function SideBarAdmin() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionStyle = {
    boxShadow: "0 2px 5px #dddddd",
    "&.MuiAccordion-root:before": {
      backgroundColor: "transparent",
    },
  };
  const navigate = useNavigate();
  const listMenu = [
    "About",
    "Platform",
    "Momelat",
    "Question_Landing",
    "landing",
    "About_Chart",
    "About_Member",
  ];
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ???????? ???????? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <NavLink
                  to="/admin/"
                  activeclassname="active"
                  className="sideBarListItem"
                >
                  <HomeRoundedIcon className="sideBarIcon" />
                  ??????????????
                </NavLink>
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[4]}`)
                  }
                >
                  ???????????? ??????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ???????????? ????????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className="accordionSide"
          expanded={expanded === "panel20"}
          onChange={handleChange("panel20")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ???????????? ???? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[0]}`)
                  }
                >
                  ???????????? ??????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[5]}`)
                  }
                >
                  ???????? ?????????????? ?? ?????????? ????????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[6]}`)
                  }
                >
                  ?????????? ???????? ??????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel21"}
          onChange={handleChange("panel21")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ?????????? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[4]}`)
                  }
                >
                  ???????? ?????? ????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>

              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ???????????? ???????????? ?????? ????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ???????? ???????? ????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ???????? ???????? ??????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel22"}
          onChange={handleChange("panel22")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ???????????? ???? ???? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[4]}`)
                  }
                >
                  ???????? ???? ????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ?????????? ????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ???????? ???? ????????????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>
              <li>
                <Button
                  className="gridButton"
                  color="info"
                  onClick={(event) =>
                    navigate(`/admin/subMenuList/${listMenu[3]}`)
                  }
                >
                  ?????? ????????????
                </Button>
                <WidgetsRoundedIcon className="sideBarIcon" />
              </li>{" "}
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel23"}
          onChange={handleChange("panel23")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold">
              {" "}
              <Button
                className="gridButton"
                color="info"
                onClick={(event) =>
                  navigate(`/admin/subMenuList/${listMenu[4]}`)
                }
              >
                ???????????? ?????? ????????????????
              </Button>
            </div>
          </AccordionSummary>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ???????????? ???????????? ???? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              {/* <li className="sideBarListItem">
                <PersonOutlineIcon className="sideBarIcon" />
                ???????????? ??????????????
              </li> */}
              <NavLink
                to="/admin/menu"
                activeclassname="active"
                className="sideBarListItem"
              >
                <WidgetsRoundedIcon className="sideBarIcon" />
                ???????????? ????{" "}
              </NavLink>
              <NavLink
                to="/admin/manager"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                manager
              </NavLink>

              <Button
                className="gridButton"
                color="info"
                onClick={(event) =>
                  navigate(`/admin/subMenuList/${listMenu[0]}`)
                }
              >
                About
              </Button>

              <NavLink
                to="/admin/question"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                question
              </NavLink>

              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                ???????????? ?????? ????????????????
              </NavLink>

              <NavLink
                to="/admin/question"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                ???????? ???????? ????
              </NavLink>
              <NavLink
                to="/admin/user"
                activeclassname="active"
                className="sideBarListItem"
              >
                <PeopleOutlineIcon className="sideBarIcon" />
                ?????????? ???????? ????
              </NavLink>
              <NavLink
                to="/admin/contact"
                activeclassname="active"
                className="sideBarListItem"
              >
                <EmailOutlinedIcon className="sideBarIcon" />
                ???????? ????
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>

        {/* <Accordion
          className="accordionSide"
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ?????????? ?????? ???????? </div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                ???????? ?????????? ????????????
              </NavLink>{" "}
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                ???????? ????????
              </NavLink>
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                ?????? ????????
              </NavLink>{" "}
              <NavLink
                to="/admin/organization"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CorporateFareIcon className="sideBarIcon" />
                ???????? ??????????
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion
          className="accordionSide"
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          sx={accordionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <div className="sideBarTitle bold"> ???????????? ?????? ????</div>
          </AccordionSummary>
          <AccordionDetails>
            <ul className="sideBarList">
              <NavLink
                to="/admin/function"
                activeclassname="active"
                className="sideBarListItem"
              >
                <SettingsSuggestOutlinedIcon className="sideBarIcon" />
              </NavLink>
              <NavLink
                to="/admin/category"
                activeclassname="active"
                className="sideBarListItem"
              >
                <CategoryOutlinedIcon className="sideBarIcon" />
                .....
              </NavLink>
              <NavLink
                to="/admin/storePackage"
                activeclassname="active"
                className="sideBarListItem"
              >
                <Inventory2OutlinedIcon className="sideBarIcon" />
                ...
              </NavLink>
              <NavLink
                to="/admin/discount"
                activeclassname="active"
                className="sideBarListItem"
              >
                <DiscountOutlinedIcon className="sideBarIcon" />
                ...
              </NavLink>
            </ul>
          </AccordionDetails>
        </Accordion> */}
      </div>
    </div>
  );
}
