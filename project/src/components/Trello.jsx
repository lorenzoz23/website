import React, { useEffect } from 'react';
import { Box, Button } from 'grommet';

function Trello(props) {
  useEffect(() => {
    getTrello();
  });

  const loadScript = function () {
    if (!customElements.get('trello-script')) {
      customElements.define(
        'trello-script',
        class extends HTMLScriptElement {
          constructor() {
            super();
            this.src = 'https://p.trellocdn.com/board-tile.min.js';
            this.crossOrigin = 'anonymous';
          }
        },
        { extends: 'script' }
      );
      const boardTileJs = document.createElement('script', {
        is: 'trello-script'
      });
      document.head.appendChild(boardTileJs);
      return boardTileJs;
    } else {
      const boardTileJs = document.createElement('script', {
        is: 'trello-script'
      });
      document.head.appendChild(boardTileJs);
      return boardTileJs;
    }
  };

  const getTrello = function () {
    const container = document.getElementById(props.divLabel);
    container.innerHTML = 'click button below if board has not loaded';
    const boardTileJs = loadScript();
    boardTileJs.onload = function () {
      fetch(
        `https://api.trello.com/1/board/${props.id}?fields=name,prefs,url&structure=all&organization=true&organization_fields=displayName`
      )
        .then(function (resp) {
          return resp.json();
        })
        .then(function (board) {
          const TrelloBoard = customElements.get('trello-board-tile');
          const boardTileEl = new TrelloBoard();
          boardTileEl.board = board;
          container.innerHTML = '';
          container.appendChild(boardTileEl);
        });
    };
  };

  return (
    <Box align="center" gap="small" justify="between">
      <div id={props.divLabel} width="medium" align="center" />
      <Button
        primary
        target="_blank"
        size="small"
        alignSelf="center"
        title="click for trello board"
        label={props.divLabel}
        href={`https://trello.com/b/${props.id}/${props.divLabel}`}
      />
    </Box>
  );
}

export default Trello;
