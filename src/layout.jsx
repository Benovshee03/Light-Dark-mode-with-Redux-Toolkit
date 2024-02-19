import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./redux/themeslice";
import './sass/layout.scss';

export default function Layout(props) {

  const theme = useSelector(state => state.mode);
  const dispatch = useDispatch();

  return (
    <>
      <header className={`${theme} container`}>
        {/* <Header /> */}
        <button onClick={() => dispatch(toggleTheme())}>Toggle Theme</button>
      </header>

      <div className={`${theme} container`}>
        {props.children}
      </div>
    </>
  )
}