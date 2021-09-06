# SpellTester
A web application that helps non-English speaking parents facilitate spelling tests for their children by pronouncing custom spelling lists.

[View website here.](https://spelltester.netlify.app)

## Technology Used
This app was built with **React** and **Material UI**. The pronunciation feature uses **Google Cloud's Text-to-Speech REST API** which generates speech with humanlike intonation. Calls to this API are made from a serverless backend function managed by Netlify, on which this app is also hosted.