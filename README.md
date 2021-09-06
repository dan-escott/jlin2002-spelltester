# SpellTester
This project was borne from a simple yet gaping issue that has arisen in education since lockdown started: non-English speaking parents struggle to pronounce spelling words accurately for their children. To obtain the pronunciation of spelling words needed to conduct spelling tests, they must resort to the tedious process of typing words one-by-one into an online translator or dictionary. To make conducting and repeating spelling tests easy, I sought to create an app that had an intuitive UI and offered high-quality pronunciations of English words. This means children from non-English speaking backgrounds are able to get the crucial active recall and spaced repetition that is needed to master spelling words, grow their vocabulary and pronounce words fluently.
## How to use
The landing page for the app displays saved spelling lists. The user can either access a saved list or create a new list.

<p align="center">
  <img src="https://i.imgur.com/lkNq0Cd.png" alt="landing page" style="width:500px;"/>
</p>

The user can optionally give the list a name, and type in or copy and paste a spelling list into the form.

<p align="center">
  <img src="https://i.imgur.com/VaOzQMJ.png" alt="spelltester form" style="width:500px;"/>
</p>

The user can conveniently access top-quality pronunciations of spelling words by clicking the audio button next to each word.

<p align="center">
  <img src="https://i.imgur.com/g93Qqpi.png" alt="spelltester form" style="width:500px;"/>
</p>

## Technology Used
This app was built with **React** and **Material UI**. The pronunciation feature uses **Google Cloud's Text-to-Speech REST API** which generates speech with humanlike intonation. Calls to this API are made from a serverless backend function managed by Netlify, on which this app is also hosted.
