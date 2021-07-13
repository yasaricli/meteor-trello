import { TAPi18n } from '../../i18n/i18n';

Blaze.registerHelper('currentBoard', () => {
  const boardId = Session.get('currentBoard');
  if (boardId) {
    return Boards.findOne(boardId);
  } else {
    return null;
  }
});

Blaze.registerHelper('currentCard', () => {
  const cardId = Session.get('currentCard');
  if (cardId) {
    return Cards.findOne(cardId);
  } else {
    return null;
  }
});

Blaze.registerHelper('currentList', () => {
  const listId = Session.get('currentList');
  if (listId) {
    return Lists.findOne(listId);
  } else {
    return null;
  }
});

Blaze.registerHelper('getUser', userId => Users.findOne(userId));

Blaze.registerHelper('concat', (...args) => args.slice(0, -1).join(''));

Blaze.registerHelper('isMiniScreen', () => Utils.isMiniScreen());

Blaze.registerHelper('isShowDesktopDragHandles', () =>
  Utils.isShowDesktopDragHandles(),
);

Blaze.registerHelper('isMiniScreenOrShowDesktopDragHandles', () =>
  Utils.isMiniScreenOrShowDesktopDragHandles(),
);

Blaze.registerHelper('_', str => {
  return TAPi18n.__(str)
});
