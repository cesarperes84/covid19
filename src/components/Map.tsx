import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from '@mui/material/Typography';
import mapBrData from "./mapBrData";

const Map = ({ results }: { results: any }): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [uf, setUF] = React.useState('');
  
  const handleClick = (event: any, uf:string) => {
    setUF(uf);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const ufCurrent = results?.find((item: { state: string; }) => item.state === uf);

  return (
    <div id="mapa">
      <svg
        version="1.1"
        id="svg-map"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="520px"
        height="530px"
        viewBox="0 0 530 520"
        enableBackground="new 0 0 450 460"
      >
        <g>
          {mapBrData.map(({ uf, transform, d }) => (
            <>
              <a
                className="estado"
                onClick={(event) => handleClick(event, uf)}
                key={uf}
              >
                <path
                  stroke="#FFFFFF"
                  strokeWidth="1.0404"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={d}
                ></path>
                <text transform={transform} fill="#222222">
                  {uf}
                </text>
              </a>
            </>
          ))}
        </g>
      </svg>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
          <Typography sx={{ px: 2, paddingTop: '20px'  }}><strong>UF:</strong> {ufCurrent?.state}</Typography>
          <Typography sx={{ px: 2 }}><strong>Casos do dia:</strong> {ufCurrent?.newCases}</Typography>
          <Typography sx={{ px: 2 }}><strong>Óbitos do dia:</strong> {ufCurrent?.newDeaths}</Typography>
          <Typography sx={{ px: 2 }}><strong>Total de Casos:</strong> {ufCurrent?.totalCases}</Typography>
          <Typography sx={{ px: 2 }}><strong>Total de Óbitos:</strong> {ufCurrent?.deaths}</Typography>
          <Typography sx={{ px: 2, paddingBottom: '20px' }}><strong>Total vacinados:</strong> {ufCurrent?.vaccinated}</Typography>
      </Popover>
    </div>
  );
};

export default Map;
