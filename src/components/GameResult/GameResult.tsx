import { FC, useEffect, useId } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "src/hook";
import { bronzeMedal, silverMedal, goldMedal } from "src/img";
import { clearResultsTable, getResultTable } from "src/store/resultsSlice";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./mui-styles";
import "./style.scss";

const GameResult: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useId();
  const nickname = useAppSelector((state) => state.nicknameReducer.nickname);
  const results = useAppSelector((state) => state.resultsReducer.results);

  useEffect(() => {
    dispatch(getResultTable());
  }, [dispatch]);

  const startAgain = () => {
    if (!results.length) {
      return navigate("/")
    }

    !nickname ? navigate("/") : navigate("/game");
  }

  return (
    <div className="result">
      <div className="table">
        <h1 className="title-result">Score Table</h1>

        <TableContainer
          component={Paper}
          sx={{width: 300}}
        >
          <Table aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>

                <TableCell>Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!results.length ? (
                <TableRow>
                  <TableCell>The table of records is empty</TableCell>
                </TableRow>
              ) : (
                results.map((result, index) => (
                  <TableRow key={`${id}-${index}`}>
                    <TableCell component="th" scope="row">
                      {index === 0 ? (
                        <span>
                          <img
                            className="medals"
                            src={goldMedal}
                            alt="goldMedal"
                          />
                          {result.name}
                        </span>
                      ) : null}

                      {index === 1 ? (
                        <span>
                          <img
                            className="medals"
                            src={silverMedal}
                            alt="silverMedal"
                          />
                          {result.name}
                        </span>
                      ) : null}

                      {index === 2 ? (
                        <span>
                          <img
                            className="medals"
                            src={bronzeMedal}
                            alt="bronzeMedal"
                          />
                          {result.name}
                        </span>
                      ) : null}

                      {index > 2 ? result.name : null}
                    </TableCell>

                    <TableCell>{result.time}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="group-button">
        <button
          className="button-table"
          onClick={() => dispatch(clearResultsTable())}
        >
          Reset Table
        </button>

        <button className="button-table" onClick={startAgain}>
          Start Again
        </button>
      </div>
    </div>
  );
};

export default GameResult;
