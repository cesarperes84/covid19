 const format = (num: string) => {
    const n = String(num),
      p = n.indexOf('.');
    return n.replace(/\d(?=(?:\d{3})+(?:\.|$))/g, (m, i) => (p < 0 || i < p ? `${m}.` : m));
  };

  export default format;