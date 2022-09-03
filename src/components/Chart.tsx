import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import am4lang_pt_BR from '@amcharts/amcharts4/lang/pt_BR';


type DataType = {
  date: string;
  deaths: string;
  newCases: string;
  newDeaths: string;
};

type DictionaryType = {
  chartCasosTotais: string;
  chartTotalMorte: string;
  chartItem: string;
  chartHistoricoMorte: string;
};

type LineSeriesChartItemType = {
  dataFields: {
    valueY?: string;
    dateX?: string;
  };
  tooltipText?: string | undefined;
  name?: string | undefined;
  strokeWidth?: number | undefined;
  stroke?: any;
  strokeDasharray?: string | undefined;
  tooltip: any;
  bullets?: any;
};

const Chart = ({ id, label, total }: { id: string; label: string; total: any }): JSX.Element => {
  am4core.useTheme(am4themes_dark);
  const chart = useRef(null);
  
  useEffect(() => {
    let chartItem = am4core.create(id, am4charts.XYChart);
    chartItem.language.locale = am4lang_pt_BR;

    if (typeof window.orientation !== 'undefined') {
      chartItem.responsive.enabled = true;
    }

    total.map((data: { [x: string]: any; date: string }) => {
      const dictionary = {
        chartCasosTotais: 'totalCases',
        chartTotalMorte: 'deaths',
        chartCasosNovos: 'newCases',
        chartHistoricoMorte: 'newDeaths',
      };

      const dateEvent = data.date;
      const index = dictionary[id as keyof DictionaryType];


      let values = data[index];
      if (values != 0) {
        chartItem['data'].push({
          date: dateEvent,
          value: data[index],
        });
      }
    });

    // X e Y novos casos por dia
    let dateAxis = chartItem.xAxes.push(new am4charts.DateAxis());
    let valueAxis = chartItem.yAxes.push(new am4charts.ValueAxis());

    // criando linhas novos casos por dia
    let lineSeriesChartItem: LineSeriesChartItemType = chartItem.series.push(
      new am4charts.LineSeries()
    );
    lineSeriesChartItem.dataFields.valueY = 'value';
    lineSeriesChartItem.dataFields.dateX = 'date';
    lineSeriesChartItem.tooltipText = '{value}';
    lineSeriesChartItem.name = 'Casos por dia';
    lineSeriesChartItem.strokeWidth = 1;
    lineSeriesChartItem.stroke = am4core.color('#ffffff');
    lineSeriesChartItem.strokeDasharray = '1';

    lineSeriesChartItem.tooltip.background.cornerRadius = 20;
    lineSeriesChartItem.tooltip.background.strokeOpacity = 0;
    lineSeriesChartItem.tooltip.pointerOrientation = 'vertical';
    lineSeriesChartItem.tooltip.label.minWidth = 40;
    lineSeriesChartItem.tooltip.label.minHeight = 40;
    lineSeriesChartItem.tooltip.label.textAlign = 'middle';

    let bulletChartItem = lineSeriesChartItem.bullets.push(new am4charts.CircleBullet());
    bulletChartItem.circle.strokeWidth = 1;
    bulletChartItem.circle.radius = 2;
    bulletChartItem.circle.fill = am4core.color('#ffffff');

    let bulletChartItemHover = bulletChartItem.states.create('hover');
    bulletChartItemHover.properties.scale = 1;

    chartItem.cursor = new am4charts.XYCursor();

    return () => {
      chartItem.dispose();
    };
  }, [total]);
  
  return (
    <Grid item key={label} xs={12} sm={6} md={3}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
            {label}
          </Typography>
          <div id={id} style={{ width: '100%', height: '250px', color: '#FFF' }} ref={chart}></div>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Chart;
