// src/components/ExpenseTracker.tsx
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type ExpenseType = {
  id: number;
  ename: string;
  eamount: number;
};

const ExpenseTracker: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [dataa, setDataa] = useState<ExpenseType[]>([]);

  const handleExpenseAdder = () => {
    if (!name.trim() || amount <= 0) {
      alert("Please enter a valid expense name and amount.");
      return;
    }

    const newExpense: ExpenseType = {
      id: Date.now(),
      ename: name.trim(),
      eamount: amount,
    };

    setDataa((prevData) => [...prevData, newExpense]);
    setName("");
    setAmount(0);
  };

  const chartData = {
    labels: dataa.map((item) => item.ename),
    datasets: [
      {
        label: "Individual Expenses",
        data: dataa.map((item) => item.eamount),
        backgroundColor: dataa.map(
          (_, i) =>
            [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#4BC0C0",
              "#9966FF",
              "#FF9F40",
              "#E7E9ED",
              "#B2FF59",
              "#FFD740",
              "#FF4081",
            ][i % 10]
        ),
        borderColor: "#ffffff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full max-w-4xl px-4 sm:px-6 md:px-10 py-12 mx-auto flex flex-col gap-8 items-center transition-all duration-300">
      <h1 className="font-black text-3xl sm:text-4xl text-center">
        Expense Tracker 💸
      </h1>

      {/* Form Section */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4">
        <Input
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="sm:max-w-[200px]"
        />
        <Input
          placeholder="Amount"
          required
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="sm:max-w-[150px]"
        />
        <Button onClick={handleExpenseAdder}>Add</Button>
      </div>

      {/* Pie Chart Section */}
      {dataa.length > 0 ? (
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-500">
          <Pie data={chartData} />
        </div>
      ) : (
        <p className="text-muted-foreground italic text-center mt-8">
          No expenses yet... start tracking! 📝
        </p>
      )}
    </div>
  );
};

export default ExpenseTracker;
