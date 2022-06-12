import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useCallback, useEffect, useState } from "react";
import getWallet from "../api/portfel.api";
import getRates from "../api/rates.api";
import SelectComponent from "./select.component";
import SelectTypeComponent from "./selectType.component";
import "./UserPage.css";
import getRatesById from "../api/portfelId.api";
import sendChange from "../api/exchange.api";

const UserPage = (props) => {
  const [rates, setRates] = useState([]);
  const [currentWallet, setCurrentWallet] = useState(null);
  const [currencyRates, setCurrencyRates] = useState([]);
  const [firstCurrent, setFirstCurrent] = useState("");
  const [secondCurrent, setSecondCurrent] = useState("");
  const [amount, setAmount] = useState("");

  const defRows = {
    icon: [
      "PLN_icon",
      "CNH_icon",
      "EUR_icon",
      "JPY_icon",
      "GBP_icon",
      "CHF_icon",
      "USD_icon",
    ],
    name: ["PLN", "CNH", "EUR", "JPY", "GBP", "CHF", "USD"],
  };
  let content = <p>Found no movies.</p>;

  const submitHandler = useCallback(async (id) => {
    const wallet = await getWallet(id);
    const currencyRates = await getRates();
    let rows = [];
    let counter = 0;
    // eslint-disable-next-line guard-for-in
    for (const key in wallet) {
      const tmpObject = {};
      const value = wallet[key] == null ? 0 : wallet[key];
      tmpObject["icon"] = defRows.icon[counter];
      tmpObject["rate"] = value;
      tmpObject["name"] = defRows.name[counter++];
      rows.push(tmpObject);
      console.log(tmpObject);
    }
    setRates(rows);
    setCurrencyRates(currencyRates);
    setCurrentWallet(wallet);
    console.log("walet" + wallet);

  }, []);

  useEffect(() => {
    submitHandler(props.onUserId);
  }, [submitHandler]);

  const firstSelectHandler = (event) => {
    setFirstCurrent(event)
  }
  const secondSelectHandler = (event) => {
    setSecondCurrent(event)
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  }

  const submitHandlerAmount = async (event) => {
    event.preventDefault();
    console.log("Dane")
    console.log(parseInt(amount))
    let tmpWallet = currentWallet;
    console.log(currencyRates)
    const currencyTmp = secondCurrent;
    let rate = 1;
    if (secondCurrent == "ilosc_eur") {
      rate = await getRatesById(3)
    } else if (secondCurrent == "ilosc_chn") {
      rate = await getRatesById(6)
    } else if (secondCurrent == "ilosc_jpy") {
      rate = await getRatesById(5)
    } else if (secondCurrent == "ilosc_gbp") {
      rate = await getRatesById(4)
    } else if (secondCurrent == "ilosc_chf") {
      rate = await getRatesById(2)
    } else {
      rate = await getRatesById(1)
    }
    console.log("Środki" + parseFloat(amount))
    console.log("Rate" + parseFloat(rate.kursSprzedaży))
    console.log("PlN" + parseFloat(currentWallet.ilość_pln))
    if (parseFloat(amount) * parseFloat(rate.kursSprzedaży) > parseFloat(currentWallet.ilość_pln)) {
      alert("Za mało środków na koncie do przeprowadzenia tranzakcji");
    }
    else {
      tmpWallet.secondCurrent = parseFloat(amount) * parseFloat(rate.kursSprzedaży);
      tmpWallet["ilosc_pln"] = parseFloat(amount) / parseFloat(rate.kursSprzedaży);
      await sendChange(tmpWallet, props.onUserId);
      console.log("tak");
    }


  }


  if (rates.length > 0) {
    content = <div><TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Icon</TableCell>
            <TableCell align="right">Currency Name</TableCell>
            <TableCell align="right">Your resources</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(console.log(currencyRates))}
          {rates.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.icon}</TableCell>
              <TableCell align="right">{row.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Nazwa Kursu</TableCell>
              <TableCell align="right">Kurs kupna</TableCell>
              <TableCell align="right">Kurs Sprzedaży</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currencyRates.map((row) => (
              <TableRow
                key={row.nazwa}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.nazwa}
                </TableCell>
                <TableCell align="right">{row.kursSprzedaży}</TableCell>
                <TableCell align="right">{row.kursKupna}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="wrapper">
        <SelectTypeComponent onSelect={firstSelectHandler} />
        <SelectComponent onSelect={secondSelectHandler} />
      </div>
      <form onSubmit={submitHandlerAmount}>
        <div className="mb-3">
          <label>Enter amount</label>
          <input
            type="text"
            value={amount}
            className="form-control"
            placeholder="Enter amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  }

  if (rates.length <= 0) {
    content = <div>ni</div>;
  }
  return (

    <div>
      {content}
    </div>
  );
};
export default UserPage;
