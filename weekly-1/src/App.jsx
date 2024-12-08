import "./App.css";
import React, { useState, useEffect } from "react";

import styled, { createGlobalStyle } from "styled-components";

const boys = [
  "Max", "Charlie", "Rocky", "Buddy", "Duke", "Milo", "Toby", "Finn", "Leo", "Diesel",
  "Zeus", "Apollo", "Cooper", "Oscar", "Jasper", "Bentley", "Beau", "Bruno", "Oliver", "Hunter",
  "Ace", "Bear", "Chase", "Jax", "King", "Bandit", "Blaze", "Thor", "Cody", "Samson",
  "Shadow", "Rusty", "Tyson", "Harley", "Blue", "Baxter", "Hank", "Ranger", "Boomer", "Remy",
  "Cash", "Tank", "Maverick", "Otis", "Chester", "Scooby", "Gus", "Jackson", "Murphy", "Winston"
];

const girls = [
  "Bella", "Daisy", "Lucy", "Luna", "Sadie", "Zoe", "Chloe", "Rosie", "Molly", "Ruby",
  "Lily", "Gracie", "Roxy", "Stella", "Sophie", "Abby", "Hazel", "Mia", "Pepper", "Ginger",
  "Piper", "Willow", "Ellie", "Coco", "Honey", "Maple", "Olive", "Penny", "Nala", "Ivy",
  "Harley", "Winnie", "Trixie", "Fifi", "Poppy", "Layla", "Jasmine", "Skye", "Mabel", "Sugar",
  "Flora", "Misty", "Gigi", "Princess", "Angel", "Nova", "Athena", "Snowy", "Opal", "Blossom"
];

const GlobalStyle = createGlobalStyle`
  body {
    background: #f1f1f1;
    font-family: sans-serif;
  }

  .page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
  }
`;

const Form = styled.form`
  border: 1px solid black;
  position: relative;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  p {
    color: #b3b3b3;
    font-size: 12px;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.35356rem;
  align-self: stretch;

  .label {
    align-self: stretch;
    color: var(--Text-primary, #000);
    text-align: left;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
  }
`;

const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${({ justify }) => justify || "flex-start"};
  gap: 0.23569rem;
  flex-wrap: wrap;

  button {
    padding: 10px 15px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    border-radius: 0;
    outline: none;

    &:hover {
      background-color: #e0e0e0;
    }

    &.selected {
      background-color: #ddd;
      font-weight: bold;
      border: 2px solid #000;
    }
  }
`;

const NameContainer = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  margin: auto;
`;

export default function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [selectedGender, setSelectedGender] = useState("boys");
  const [selectedNames, setSelectedNames] = useState([]);
  const [rejectedNames, setRejectedNames] = useState([]);
  const [maybeNames, setMaybeNames] = useState([]);


  useEffect(() => {
    generateRandomName();
  }, [selectedGender]);

  const generateRandomName = () => {
    const allNames = selectedGender === "boys" ? boys : girls;
    const availableNames = allNames.filter(
      (name) => !rejectedNames.includes(name) && !maybeNames.includes(name)
    );

    const prioritizedNames = [...maybeNames, ...availableNames];
    if (prioritizedNames.length === 0) {
      setCurrentWord("No more names available!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * prioritizedNames.length);
    setCurrentWord(prioritizedNames[randomIndex]);
  };

  const handleApproval = (action) => {
    if (action === "yes") {
      setSelectedNames((prev) => [...prev, currentWord]);
    } else if (action === "no") {
      setRejectedNames((prev) => [...prev, currentWord]);
    } else if (action === "maybe") {
      setMaybeNames((prev) => [...prev, currentWord]);
    }
    generateRandomName();
  };


  return (
    <>
      <GlobalStyle />
      <div className="page">
        <Form>
          <H1>Select a name for your Pet</H1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros.
          </p>
          <ContainerBottom>
            <p className="label">Gender</p>
            <ButtonContainer>
              <button
                type="button"
                className={selectedGender === "boys" ? "selected" : ""}
                onClick={() => setSelectedGender("boys")}
              >
                Boys
              </button>
              <button
                type="button"
                className={selectedGender === "girls" ? "selected" : ""}
                onClick={() => setSelectedGender("girls")}
              >
                Girls
              </button>
            </ButtonContainer>
            <p className="label">Yay is for Yes, Nay is for no, Meh is maybe</p>
            <NameContainer>{currentWord}</NameContainer>
            <ButtonContainer justify="center">
              <button type="button" onClick={() => handleApproval("yes")}>
                Yay 👍🏻
              </button>
              <button type="button" onClick={() => handleApproval("no")}>
                Nay 👎🏻
              </button>
              <button type="button" onClick={() => handleApproval("maybe")}>
                Meh? 🤷🏻‍♀️
              </button>
            </ButtonContainer>

            <div>
              <h2>Approved Names:</h2>
              <ul>
                {selectedNames.map((name, index) => (
                  <li key={index}>{name}</li>
                ))}
              </ul>
            </div>
          </ContainerBottom>
        </Form>
      </div>
    </>
  );
}
