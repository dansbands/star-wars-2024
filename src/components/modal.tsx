import React, { Dispatch, SetStateAction } from "react";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { emptyFilm, formatDate, numerals, posters } from "../util/helpers";
import { CharacterFilms } from "./film-list";
import { Box } from "@mui/material";

type Props = {
  currentFilm: CharacterFilms;
  setCurrentFilm: Dispatch<SetStateAction<CharacterFilms>>;
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function Modal({ currentFilm, setCurrentFilm }: Props) {
  const handleClose = () => {
    setCurrentFilm(emptyFilm);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={currentFilm.episode_id > 0}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div>{`Episode ${numerals[currentFilm.episode_id - 1]}: ${
            currentFilm.title
          }`}</div>
          <span>Release Date: {formatDate(currentFilm.release_date)}</span>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box
            component="img"
            sx={{
              float: "left",
              width: 200,
              marginRight: 2,
              marginBottom: 1,
            }}
            alt="Film Poster"
            src={posters[currentFilm.episode_id - 1]}
          />
          <Typography variant={"body2"} gutterBottom>
            {currentFilm.opening_crawl}
          </Typography>{" "}
          <div className="modal-credits">
            <Typography variant={"body1"} gutterBottom>
              Director: {currentFilm.director}
            </Typography>
            <Typography variant={"body1"} gutterBottom>
              Producer: {currentFilm.producer}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
