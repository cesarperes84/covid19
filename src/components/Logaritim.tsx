import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4lang_pt_BR from "@amcharts/amcharts4/lang/pt_BR";

am4core.useTheme(am4themes_dark);

const Logaritim = ({ total }: { total: any[] }) => {
  const chart = useRef(null);
  useEffect(() => {
    if (total.length > 0) {
      let dateActual = new Date();
      // tema global
      am4core.useTheme(am4themes_dark);
      // Create chart instance
      let chartLog = am4core.create("chartLog", am4charts.XYChart);

      if (total.length > 0) {
        chartLog.language.locale = am4lang_pt_BR;
        if (typeof window.orientation !== "undefined") {
          chartLog.responsive.enabled = true;
        }

        total?.map((data: { date: any; totalCases: any; _id: any }) => {
          const dateEvent = data.date;

          // array novos casos por dia
          let valueNovosCasosDia = data.totalCases;
          if (valueNovosCasosDia != 0) {
            chartLog["data"].push({
              dateBr: data._id,
              date: dateEvent,
              value: data.totalCases,
            });
          }
        });

        // Create axes
        var dateAxis = chartLog.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;
        dateAxis.renderer.minGridDistance = 30;
        dateAxis.renderer.labels.template.fontSize = 10;

        var valueAxis = chartLog.yAxes.push(new am4charts.ValueAxis());
        valueAxis.logarithmic = true;
        valueAxis.renderer.minGridDistance = 50;

        // Create series
        var series = chartLog.series.push(new am4charts.LineSeries());
        series.dataFields.valueY = "value";
        series.dataFields.dateX = "date";
        series.tooltipText =
          "[bold font-size: 14px] Dia {dateBr}[/] [bold font-size: 14px]: {value} casos[/]";
        series.tensionX = 0.8;
        series.strokeWidth = 2;
        series.stroke = am4core.color("#fff");

        var bullet = series.bullets.push(new am4charts.CircleBullet());
        bullet.circle.fill = am4core.color("#fff");
        bullet.circle.strokeWidth = 0;
        bullet.circle.radius = 3;

        // Add cursor
        chartLog.cursor = new am4charts.XYCursor();
        chartLog.cursor.fullWidthLineX = true;
        chartLog.cursor.xAxis = dateAxis;
        chartLog.cursor.lineX.strokeWidth = 0;
        chartLog.cursor.lineX.fill = am4core.color("#000");
        chartLog.cursor.lineX.fillOpacity = 0.1;

        // Add a guide
        let range = valueAxis.axisRanges.create();
        range.value = 90.4;
        range.grid.stroke = am4core.color("#396478");
        range.grid.strokeWidth = 1;
        range.grid.strokeOpacity = 3;
        range.grid.strokeDasharray = "1";
        range.label.inside = true;
        range.label.fill = range.grid.stroke;
        range.label.verticalCenter = "bottom";
      }
    return () => {
      chartLog.dispose();
    };
  }
  }, [total]);

  return (
    <Container sx={{ py: 8 }} maxWidth="xl">
      <Grid container spacing={4}>
        <Card
          sx={{
            height: "100%",
            width: "100%",
            display: "block",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Curva de contágio Logaritimica
            </Typography>
            <div
              id="chartLog"
              style={{ width: "100%", height: "500px" }}
              ref={chart}
            >
              Carregando...
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default Logaritim;
