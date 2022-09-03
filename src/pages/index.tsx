import { useMemo } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import AppBar from "../components/AppBar";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Charts from "../components/Charts";
import Map from "../components/Map";
import Table from "../components/Table";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import { useCovidStatsContext } from "../contexts/CovidStatsContext";
import format from "../utility/format";

const Logaritim = dynamic(() => import("../components/Logaritim"), {
  ssr: false,
});

const Home: NextPage = () => {
  const { results, total, loadData, loadTotalData } = useCovidStatsContext();
  const cards = useMemo(
    () => [
      {
        id: "chartCasosTotais",
        label: "Casos confirmados",
        value: format(results[1]?.totalCases),
      },
      {
        id: "chartTotalMorte",
        label: "Óbitos confirmados",
        value: format(results[1]?.deaths),
      },
      {
        id: "chartCasosNovos",
        label: "Casos do Dia",
        value: format(results[1]?.newCases),
      },
      {
        id: "chartHistoricoMorte",
        label: "Óbitos/Dia",
        value: format(results[1]?.newDeaths),
      },
    ],
    [results]
  );

  useEffect(() => {
    loadData();
    loadTotalData();
  }, []);

  return (
    <>
      <Head>
        <title>Corona Vírus pelo Brasil</title>
        <meta name="description" content="Corona Vírus pelo Brasil" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Cards cards={cards} />
          <Logaritim total={total} />
          <Charts cards={cards} total={total} />
          <Grid container sx={{ py: 8 }} maxWidth="xl">
            <Grid item spacing={4} xs={12}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                Casos de Corona Vírus por Estado
              </Typography>
            </Grid>
            <Grid item spacing={4} xs={12} md={6}>
              <Table results={results} />
            </Grid>
            <Grid item spacing={4} xs={12}  md={6} style={{ textAlign: "center" }}>
              <Map />
            </Grid>
          </Grid>
        </main>
      </div>
    </>
  );
};

export default Home;
