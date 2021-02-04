import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab_notion_theme extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_notion_theme',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension jupyterlab_notion_theme is activated!');
    const style = 'jupyterlab_notion_theme/index.css';

    manager.register({
      name: 'jupyterlab_notion_theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
