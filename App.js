import React, { useState, useEffect } from "react";
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import Dash from "./Views/Dash";
import Join from "./Views/Join";
import Checkin from "./Views/Checkin";
import Profile from "./Views/Profile";
import Login from "./Views/Login";

import useChallenge from "./services/firebase/useChallenge";
import useAuth from "./services/firebase/useAuth";
import useCheckin from "./services/firebase/useCheckin"


select = document.getElementById('select');
ul = document.getElementById('ul');
goals = [];
if (localStorage.getItem('key') == null) {
    goals = [];
} else {
    goals = JSON.parse(localStorage.getItem('key'));
}
populate()
form.addEventListener('submit', function () {
    inptxt = input.value;
    goal = {
        goaltext: inptxt,
        done: false
    }
    goals.push(goal)
    localStorage.setItem('key', JSON.stringify(goals));
    populate();

    input.value = '';


})

function populate() {
    ul.innerHTML = goals.map((onebyoneGoal, i) => {
        return `<li class='${onebyoneGoal.done ? 'checked' : ''}'>${onebyoneGoal.goaltext} <button   id=${i} class='btn btn-success completed'><i class="fa fa-check" aria-hidden="true"></i></button><button id=${i} class='btn btn-danger deleted'><i class="fa fa-trash" aria-hidden="true"></i></button></li>`;
    }).join('')
}

ul.addEventListener('click', function (e) {
    if (e.target.classList[2] == 'completed') {

        li = e.target.parentElement;
        li.classList.add('checked')
        index = e.target.id;
        goals[index].done = 'true'
        localStorage.setItem('key', JSON.stringify(goals))


    }
    if (e.target.classList[2] == 'deleted') {


        li = e.target.parentElement;
        li.classList.add('removewithStyle')

        li.addEventListener('transitionend', function () {
            li.remove()
        })

        index = e.target.id;
        what = goals[index]
        console.log(index)
        goals.splice(index, 1);
        localStorage.setItem('key', JSON.stringify(goals))


    }
})

select.addEventListener('change', function (e) {

    li = ul.childNodes;
    li.forEach(onebyone => {

        switch (e.target.value) {
            case 'all':
                onebyone.style.display = 'block'
                break;
            case 'completed':
                if (onebyone.classList == 'checked') {
                    onebyone.style.display = 'block'
                } else {
                    onebyone.style.display = 'none'
                }
                break;
            case 'uncompleted':
                if (onebyone.classList != 'checked') {
                    onebyone.style.display = 'block'
                } else {
                    onebyone.style.display = 'none'
                }
                break;
        }
    })

})

export default App;

