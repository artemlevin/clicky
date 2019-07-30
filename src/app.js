import React, { Component } from 'react';
import Header from './components/Header'
import CharacterCard from './components/CharacterCard'
import './App.css'

let counter = 0;

class App extends Component {
    state = {
        counter: 0,
        persons: [{
                id: 1,
                name: "one",
                selected: false
            },
            {
                id: 2,
                name: "two",
                selected: false
            },
            {
                id: 3,
                name: "three",
                selected: false
            },
            {
                id: 4,
                name: "four",
                selected: false
            },
            {
                id: 5,
                name: "five",
                selected: false
            },
            {
                id: 6,
                name: "six",
                selected: false
            }


        ]
    };

    counter = (name, selectedState) => {
        let pArray = this.state.persons;
        //shuffles the Array
        pArray.sort(function(a, b) { return 0.5 - Math.random() });

        if (selectedState) {
            //sets everyone to not selected
            pArray.forEach(person => persons.selected = false);
            this.setState({ persons: pArray, counter: 0 })
        } else {
            // if person selected false then counter ++
            pArray.forEach((person) => {
                if (persons.id === id && person.selected === false) {
                    fighter.selected = true;
                    this.setState({ persons: personsArray, counter: counter++ })
                }
            });
        }
    };

    render() {
            return ( <
                wrapper >
                <
                Header score = { this.state.counter }
                /> <
                div className = { "container" } >
                <
                div className = { "row" } > {
                    this.state.persons.map((person) => < CharacterCard id = { fighter.id }
                        id = { fighter.id }
                        character = { person.name }
                        selected = { person.selected }
                        counterCheck = { this.counter }
                        />)} < /
                        div > <
                        /div> < /
                        wrapper >
                    )
                };
            }

            export default App;