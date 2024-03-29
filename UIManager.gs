var UIManager = (function () {
  return {
    registerMenu: function () {
      var ui = SpreadsheetApp.getUi();
      ui.createAddonMenu()
        .addItem('Scatter Plot Helper', 'clientShowScatter')
        .addItem('Summary Stats Helper', 'clientShowStats')
        .addItem('Data Filter Helper', 'clientShowFilter')
        .addItem('Map Helper', 'clientShowMapDialog')
        .addToUi();
    },
    showSidebar: function (which) {
      var html = HtmlService
        .createTemplateFromFile(which)
        .evaluate()
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setTitle('ZooTools for Sheets™');

      SpreadsheetApp.getUi()
        .showSidebar(html);
    },
    showDialog: function (menuItem) {
      var dialog = {
        map: {
          height: 500,
          width: 700,
          title: 'Map'
        },
        working: {
          height: 100,
          width: 100,
          title: 'Working...'
        }
      };

      var ui = HtmlService.createTemplateFromFile(menuItem + '-dialog')
        .evaluate()
        .setWidth(dialog[menuItem].width)
        .setHeight(dialog[menuItem].height)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
      SpreadsheetApp.getUi().showModalDialog(ui, dialog[menuItem].title);
    },
    showGenericDialog: function (prompt) {
      var ui = SpreadsheetApp.getUi();

      ui.alert(prompt);
    }
  }
})();
