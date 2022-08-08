import style from './HeaderView.module.css';
import HeaderTextArea from '../HeaderTextArea';

const HeaderView = () => {
    return (
        <div className={style.Header}>
            <HeaderTextArea></HeaderTextArea>
        </div>
    );
}

export default HeaderView;