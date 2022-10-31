// ==UserScript==
// @name         Bandcamp Volume
// @version      1.0.1
// @description  A simple userscript which adds a simple volume slider on bandcamp.
// @author       rogeraabbccdd
// @match        https://*.bandcamp.com/album/*
// @match        https://*.bandcamp.com/track/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bandcamp.com
// @namespace    https://github.com/rogeraabbccdd/Bandcamp-Volume/
// @updateURL    https://raw.githubusercontent.com/rogeraabbccdd/Bandcamp-Volume/master/Bandcamp-Volume.user.js
// @downloadURL  https://raw.githubusercontent.com/rogeraabbccdd/Bandcamp-Volume/master/Bandcamp-Volume.user.js
// @grant        none
// ==/UserScript==

const playCell = document.getElementsByClassName('play_cell')[0]
playCell.setAttribute('rowspan', 3)
playCell.style.verticalAlign = 'middle'

const audio = document.getElementsByTagName('audio')[0]
const volumeHTML = `
  <td colspan="3">
    <style>
      .invertIconography .vol-icon {
        filter: invert(1);
      }
      .vol-icon {
        width: 24px;
        height: 20px;
        margin:1px 0.83333333333333em;
        vertical-align: middle;
      }
      #vol-slider {
        width: 200px;
        vertical-align: middle;
      }
    </style>
    <svg style="" class="vol-icon" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#material-vol-up"></use></svg>
    <input type="range" min="0" max="1" id="vol-slider" value="100" step="0.01" style="">
  </td>`

const playerTable = document.querySelector('.inline_player table tbody')
const volume = document.createElement('tr')
volume.innerHTML = volumeHTML
playerTable.append(volume)

const slider = document.querySelector('#vol-slider')
slider.value = audio.volume
slider.oninput = () => {
  audio.volume = slider.value
}
