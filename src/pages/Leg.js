import {useDispatch, useSelector} from "react-redux";

import css from "./style.module.scss";
import {incFirstLetter} from "../funcrions";
import {imageActive} from "../redux/slices";

const Leg = ({activeButton, active}) => {
    const {images} = useSelector(state => state.images);
    const {values} = images.leg;
    const dispatch = useDispatch();

    return (
        <div className={css.btnGroup}>
            {values.map((leg, index) => <button
                key={index}
                className={active === leg ? 'active' : ''}
                onClick={() => {
                    dispatch(imageActive.changeLeg(leg));
                    activeButton(leg);
                }}
            >{incFirstLetter(leg)}</button>)}
        </div>
    )
}

export {Leg};