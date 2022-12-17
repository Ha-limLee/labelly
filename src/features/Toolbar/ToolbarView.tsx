import style from './ToolbarView.module.css';
import SelectModeButton from '../selectModeButton';
import CreateModeButton from '../createModeButton';

const ToolbarView = () => {
    return (
        <div className={style.Toolbar}>
            <SelectModeButton></SelectModeButton>
            <CreateModeButton></CreateModeButton>
        </div>
    );
}

export default ToolbarView;