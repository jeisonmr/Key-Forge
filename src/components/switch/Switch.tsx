// Importación del componente Switch del Framework Material UI.
import Switch from "@mui/material/Switch";

interface ToogleProps {
  setCheck?:any;
  stateCheck?:boolean;
  title?: string;
  className?:string;
}

const Toggle = ({setCheck, title, className, stateCheck}: ToogleProps) => {
  return (
    <div className={`${className} flex items-center gap-1 p-1 rounded-xs accent-pink bg-purple-night/10 border border-purple-800`}>
      {/* Render del Switch Toggle */}
      <Switch
        checked={stateCheck ?? false}
        onChange={(e)=>setCheck(e.target.checked)}
        inputProps={{ "aria-label": "controlled" }}
        className="accent-pink"
      />
      <h6 className="text-txt-description3 text-pink font-primary-600">
        {title}
      </h6>
    </div>
  );
};

export default Toggle;