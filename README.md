# D&D Bestiary:
Welcome to the D&D Bestiary! This project provides detailed information about various monsters and enemies found within the world of Dungeons & Dragons, including their size, type, alignment, and more.

# Components:
App:
The main component that renders the application.

Entry:
A component that allows users to input text and submit it via a form. It uses the useState hook to manage the input state and calls a provided action function with the input content upon form submission. It takes the following props:

    action: A function to be called with the input content when the form is submitted.

Info:
A component that displays detailed information about a specific monster. It takes the following props:

    name: The name of the monster.
    data: The data object containing the monster’s details.
    monsterName: The name used to fetch the monster’s image.

Title:
A component that displays the title and introductory text for the bestiary.

# API:
The project fetches data from the [D&D 5th edition API.](https://www.dnd5eapi.co/) The API provides detailed information about various monsters, spells, classes, etc, in the Dungeons & Dragons universe.

# Repo Link:
https://codesandbox.io/p/sandbox/cmsi2021-homework2-api-gabrielw-85r2jm
