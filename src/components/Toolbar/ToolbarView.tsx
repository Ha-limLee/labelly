import style from './ToolbarView.module.css';
import SelectModeButton from '../SelectModeButton';
import CreateModeButton from '../CreateModeButton';

const ToolbarView = () => {
    return (
        <div className={style.Toolbar}>
            <SelectModeButton></SelectModeButton>
            <CreateModeButton></CreateModeButton>
        </div>
    );
}

export default ToolbarView;