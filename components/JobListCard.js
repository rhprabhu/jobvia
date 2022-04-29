import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import style from "./JobListCard.module.css";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CardActions from "@mui/material/CardActions";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const JobListCard= ({ applicant, updateFavorites, checkFav }) => {
  return (
    <>
      <Card className={style.card}>
        <CardContent>
          <div className={style.card_container}>
            <div>
              <div className={style.card_content}>
                <div className={style.photo}>
                  <div className={style.imageDiv}>
                    <p className={style.imageDivParaGraph}></p>
                  </div>
                </div>
                <div className={style.list_content}>
                  <p className={style.name}>
                    <span className={style.badge}>FAv</span>
                  </p>
                  <p className={style.status}>Project Manager</p>
                  <ul className={style.ul}>
                    <li>
                      <FmdGoodRoundedIcon
                        style={{ fontSize: "13px" }}
                        className={style.locationIcon}
                      />
                    </li>
                  </ul>
                </div>
                <div className={style.sectors}></div>
                <div className={style.favContent}>
                  <div
                  // className={
                  //   checkFav(applicant.sourceId)
                  //     ? style.FavoriteLiked
                  //     : style.FavoriteIcon
                  // }
                  >
                    <a>
                      <FavoriteBorderOutlinedIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardActions>
          <LocalOfferOutlinedIcon />
          <p className={style.keyword}>Keywords : Ui designer , developer</p>
          <a className={style.link}>Apply now</a>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </CardActions>
      </Card>
    </>
  );
};

export default JobListCard;