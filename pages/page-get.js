"use strict";
/* esLint-env node, es6 */
const { join } = require("path");

const { readFile } = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(readFile);

const READ_OPTIONS = { encoding: 'UTF-8' };
const HTML_URL = 'C:/Dev_Web/Api/html';

const lireFichierHtml = (File) =>
  readFileAsync(join(HTML_URL, File), READ_OPTIONS);

module.exports = async nomPage => {
  //Récupérer le contenu  html du modele.html et des élements de la page

  const [modeleHtml, enteteIndexHtml, bodyIndexHtml] = await Promise.all([
    lireFichierHtml('modele.html'),
    lireFichierHtml(`${nomPage}.head.html`),
    lireFichierHtml(`${nomPage}.body.html`)
  ]);

  const pageHtml = modeleHtml
    .replace('{{EN-TETE}}', enteteIndexHtml)
    .replace('{{CORPS}}', bodyIndexHtml);
  //Retourner la page HTML
  return pageHtml;
};
