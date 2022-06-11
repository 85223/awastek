import { useEffect, useState } from "react";
import classes from "./OffCanvas.module.sass";
import { Mock } from "../../mock/mock";

interface Props {
  currentValue?: Mock[];
  dataNumber: number;
}

const OffCanvas = ({ currentValue, dataNumber }: Props) => {
  const [icon, SetIcon] = useState(classes.toggler);
  const [active, setActive] = useState(classes.container);

  const navToggle = () => {
    if (active === classes.container) {
      setActive(classes.container + " " + classes.active);
    } else setActive(classes.container);

    // Icon Toggler
    if (icon === classes.toggler) {
      SetIcon(classes.toggler + " " + classes.toggle);
    } else SetIcon(classes.toggler);
  };

  useEffect(() => console.log(currentValue), [currentValue]);
  return (
    <div className={classes.root}>
      <div className={active}>
        {currentValue === undefined ||
          (currentValue.length === 0 && (
            <div className={classes.dataNumber}>資料總數： {dataNumber} </div>
          ))}
        {currentValue?.map((item, id) => (
          <div key={id} className={classes.selectData}>
            <div>{item.name}</div>
            {item.items.map((img, id) => (
              <img key={id} src={img} alt="" />
            ))}
          </div>
        ))}
      </div>
      <div onClick={navToggle} className={icon}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
    </div>
  );
};

export default OffCanvas;
