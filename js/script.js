// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function generates a random number.
 */
const randomNum = Math.floor(Math.random() * 10) + 1
const negativeRandomNum = Math.floor(Math.random() * 10) + 1
/**
 * This function displays a randomly generated positive or negative number.
 */
function myButtonClicked() {
  buttonOnChecked = document.getElementById('flash1').checked;
alert(buttonOnChecked);
  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: On</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
    "<p>Value is: Off</p>"
  }
}
