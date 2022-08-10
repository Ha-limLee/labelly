import React from 'react';
import style from './AppView.module.css';
import Header from '../Header/Header';
import Toolbar from '../Toolbar';
import LabellingBoard from '../LabellingBoard';

const AppView = () => {
    return (
        <div className={style.App}>
            <Header/>
            <Toolbar/><LabellingBoard/>
        </div>
    );
}

export default AppView;