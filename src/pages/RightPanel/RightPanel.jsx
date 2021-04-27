import React, { useContext, useState } from 'react';
import styles from './RightPanel.module.scss';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import EditorView from '../../components/EditorView/EditorView';
import BrowserView from '../../components/BrowserView/BrowserView';
import { GlobalContext } from '../../context/reducers/globalReducer';
import { closeRightPanel } from '../../context/actions/globalActions';
import TerminalGenerator from '../../components/Terminal/TerminalGenerator';
// import terminalStyles from '../../components/Terminal/TerminalView.module.scss';
const closeIcon = require('../../assets/images/close.png');

// add tabviews (convert the code preview and browser preview) - mintyBois 4/16
// eslint-disable

const RightPanel = () => {
  const [{ rightPanelDisplay, url }, dispatchToGlobal] = useContext(GlobalContext);
  const [tabIndex, setTabIndex] = useState(0);

  const handleCloseRightPanelView = () => {
    dispatchToGlobal(closeRightPanel());
  };

  // Tabbed View

  return (
    <div id={styles.rightPanel}>
      <img src={closeIcon} id={styles.close} alt='close' onClick={handleCloseRightPanelView} />

      <Tabs style = {{marginBottom: 5}} value={tabIndex} onChange={(event, newValue) => setTabIndex(newValue)} centered >
        <Tab value={0} label="Code Editor" />
        <Tab value={1} label="Browser" />
        <Tab value={2} label="Test Terminal" />
      </Tabs>

      {/* Editor Tab */}
      <div hidden={tabIndex !== 0}>
        <EditorView />
      </div>
      {/* Browser Tab */}
      <div hidden={tabIndex !== 1}>
        <BrowserView />
      </div>
      {/* Test Terminal */}
      <div hidden={tabIndex !== 2} >
        <TerminalGenerator />
      </div>
    </div>
  );
};
export default RightPanel;
