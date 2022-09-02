import mapBrData from './mapBrData';

const Map = (): JSX.Element => {

  const showDataUF = (value: string) => {
    console.log('value', value);
  };

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
            <a className="estado" onClick={() => showDataUF(uf)}>
            <path
              stroke="#FFFFFF"
              strokeWidth="1.0404"
              strokeLinecap="round"
              strokeLinejoin="round"
              d={d}
            ></path>
            <text transform={transform} fill="#222222">{uf}</text>
          </a>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Map;
