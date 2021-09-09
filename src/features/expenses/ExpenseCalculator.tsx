import { Delete } from "@material-ui/icons";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "../../store";
import { addLineItem, removeLineItem, updateLineItem } from "./expensesSlice";

export const ExpenseCalculator = (): React.ReactElement => {
  const expenseState = useSelector((state: RootState) => state.expenses);
  const { lineItems } = expenseState;
  const budgetLabels = lineItems.map((lineItem) => lineItem.name);
  const budgetData = lineItems.map((lineItem) => lineItem.amount);

  const data = {
    labels: budgetLabels,
    datasets: [
      {
        label: "# of Votes",
        data: budgetData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dispatch = useDispatch();

  function handleAddLineItem() {
    dispatch(
      addLineItem({
        id: uuidv4(),
        name: "",
        amount: 0,
      })
    );
  }

  return (
    <Box
      margin={3}
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
    >
      <Box display="flex" flexDirection="column">
        {lineItems.map((lineItem) => (
          <Box display="flex">
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">
                Expense Name
              </InputLabel>
              <OutlinedInput
                sx={{ marginBottom: 4 }}
                id="outlined-adornment-amount"
                label="Expense Name"
                value={lineItem.name}
                onChange={(e) =>
                  dispatch(
                    updateLineItem({
                      ...lineItem,
                      id: lineItem.id,
                      name: e.target.value,
                    })
                  )
                }
              />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor="outlined-adornment-amount">
                Expense Amount
              </InputLabel>
              <OutlinedInput
                sx={{ marginBottom: 4 }}
                id="outlined-adornment-amount"
                label="Expense Amount"
                value={lineItem.amount}
                onChange={(e) =>
                  dispatch(
                    updateLineItem({
                      ...lineItem,
                      id: lineItem.id,
                      amount: parseInt(e.target.value, 10),
                    })
                  )
                }
              />
            </FormControl>
            <IconButton
              onClick={() => {
                dispatch(removeLineItem(lineItem));
              }}
              color="primary"
              aria-label="remove line item"
              component="span"
            >
              <Delete />
            </IconButton>
          </Box>
        ))}
        <Button onClick={handleAddLineItem} sx={{ mr: 1 }}>
          Add
        </Button>
        Total Expenses: {expenseState.expensesTotal}
      </Box>
      <Box display="flex" flexDirection="column">
        <Pie
          data={data}
          height={200}
          width={200}
          options={{ maintainAspectRatio: false }}
        />
      </Box>
    </Box>
  );
};
