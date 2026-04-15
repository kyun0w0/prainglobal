
const rawData = [{"year": 2007, "assets": 8040584350, "liabilities": 2016963752, "equity": 6023620598, "revenue": 9573778272, "cogs": 5881586830, "grossProfit": 3692191442, "sga": 2328702300, "operatingProfit": 1363489142, "nonOperatingIncome": 493637717, "nonOperatingExpense": 71781812, "netIncome": 1369053917}, {"year": 2008, "assets": 9541465022, "liabilities": 2396298416, "equity": 7145166606, "revenue": 12402200267, "cogs": 9284534833, "grossProfit": 3117665434, "sga": 2010336252, "operatingProfit": 1107329182, "nonOperatingIncome": 402757881, "nonOperatingExpense": 47785241, "netIncome": 1089139928}, {"year": 2009, "assets": 11520306556, "liabilities": 2340362058, "equity": 9179944498, "revenue": 15173719770, "cogs": 11159145998, "grossProfit": 4014573772, "sga": 1532260760, "operatingProfit": 2482313012, "nonOperatingIncome": 330654672, "nonOperatingExpense": 123182534, "netIncome": 2035849592}, {"year": 2010, "assets": 14998673302, "liabilities": 2956079463, "equity": 12042593839, "revenue": 19373550018, "cogs": 14241665100, "grossProfit": 5131884918, "sga": 1686961985, "operatingProfit": 3444922933, "nonOperatingIncome": 375647686, "nonOperatingExpense": 73491235, "netIncome": 2885921664}, {"year": 2011, "assets": 17625479994, "liabilities": 3236352187, "equity": 14389127807, "revenue": 20623501356, "cogs": 16939238029, "grossProfit": 3684263327, "sga": 753837415, "operatingProfit": 2930425912, "nonOperatingIncome": 658374818, "nonOperatingExpense": 146896688, "netIncome": 2630508906}, {"year": 2012, "assets": 17244140647, "liabilities": 1742842103, "equity": 15501298544, "revenue": 18035442180, "cogs": 16305201011, "grossProfit": 1730241169, "sga": 794462928, "operatingProfit": 935778241, "nonOperatingIncome": 852944145, "nonOperatingExpense": 222213712, "netIncome": 1266699018}, {"year": 2013, "assets": 21801471820, "liabilities": 2663755940, "equity": 19137715880, "revenue": 21782233344, "cogs": 20431111919, "grossProfit": 1351121425, "sga": 951275567, "operatingProfit": 399845858, "nonOperatingIncome": 630724931, "nonOperatingExpense": 259419910, "netIncome": 606340762}, {"year": 2014, "assets": 30047162575, "liabilities": 8904546672, "equity": 21142615903, "revenue": 29480198036, "cogs": 26413015878, "grossProfit": 3067182158, "sga": 1063510903, "operatingProfit": 2003671255, "nonOperatingIncome": 619714856, "nonOperatingExpense": 184546123, "netIncome": 1891751047}, {"year": 2015, "assets": 27019520595, "liabilities": 6729446252, "equity": 20290074343, "revenue": 25121751579, "cogs": 25399501730, "grossProfit": -277750151, "sga": 1204287552, "operatingProfit": -1482037703, "nonOperatingIncome": 1085796043, "nonOperatingExpense": 780191338, "netIncome": -819277257}, {"year": 2016, "assets": 28234373012, "liabilities": 7297208064, "equity": 20937164948, "revenue": 31597056702, "cogs": 28887820800, "grossProfit": 2709235902, "sga": 1700299939, "operatingProfit": 1008935963, "nonOperatingIncome": 500493430, "nonOperatingExpense": 652863041, "netIncome": 668750447}, {"year": 2017, "assets": 29920728490, "liabilities": 8532858232, "equity": 21387870258, "revenue": 25979260939, "cogs": 23353812845, "grossProfit": 2625448094, "sga": 2036606066, "operatingProfit": 588842028, "nonOperatingIncome": 614066803, "nonOperatingExpense": 617776074, "netIncome": 322400563}, {"year": 2018, "assets": 29639205993, "liabilities": 8601399318, "equity": 21037806675, "revenue": 29322550550, "cogs": 26175325129, "grossProfit": 3147225421, "sga": 1924056786, "operatingProfit": 1223168635, "nonOperatingIncome": 884766468, "nonOperatingExpense": 334924164, "netIncome": 1388162313}, {"year": 2019, "assets": 33073958381, "liabilities": 11221543156, "equity": 21852415225, "revenue": 36654836094, "cogs": 32801798336, "grossProfit": 3853037758, "sga": 2265123562, "operatingProfit": 1587914196, "nonOperatingIncome": 885385945, "nonOperatingExpense": 899461444, "netIncome": 1323756584}, {"year": 2020, "assets": 39016004706, "liabilities": 15850299673, "equity": 23165705033, "revenue": 32682102374, "cogs": 29218307347, "grossProfit": 3463795027, "sga": 2141900369, "operatingProfit": 1321894658, "nonOperatingIncome": 760733537, "nonOperatingExpense": 889642838, "netIncome": 881977385}, {"year": 2021, "assets": 64088942311, "liabilities": 24490575999, "equity": 39598366312, "revenue": 50080803490, "cogs": 43160730756, "grossProfit": 6920072734, "sga": 4833662104, "operatingProfit": 2086410630, "nonOperatingIncome": 4491611315, "nonOperatingExpense": 640751465, "netIncome": 4754226867}, {"year": 2022, "assets": 54270062388, "liabilities": 12845660619, "equity": 41424401769, "revenue": 62266487678, "cogs": 55340494710, "grossProfit": 6925992968, "sga": 5857767297, "operatingProfit": 1068225671, "nonOperatingIncome": 9169060642, "nonOperatingExpense": 3642926424, "netIncome": 4673327640}, {"year": 2023, "assets": 64553933779, "liabilities": 11674714334, "equity": 52879219445, "revenue": 77544156918, "cogs": 70575397722, "grossProfit": 6968759196, "sga": 6468950596, "operatingProfit": 499808600, "nonOperatingIncome": 7182733886, "nonOperatingExpense": 782812875, "netIncome": 5699444558}, {"year": 2024, "assets": 62286718335, "liabilities": 9673203793, "equity": 52613514542, "revenue": 84401175209, "cogs": 77069471370, "grossProfit": 7331703839, "sga": 5654126270, "operatingProfit": 1677577569, "nonOperatingIncome": 1877806412, "nonOperatingExpense": 1443924295, "netIncome": 1525885738}, {"year": 2025, "assets": 67004000000, "liabilities": 13939000000, "equity": 53065000000, "revenue": 95936000000, "cogs": 88747000000, "grossProfit": 7189000000, "sga": 5838000000, "operatingProfit": 1351000000, "nonOperatingIncome": 1068000000, "nonOperatingExpense": 1911000000, "netIncome": 124000000}];
const data = rawData.map((d, idx, arr) => {
  const prev = idx > 0 ? arr[idx - 1] : null;
  return {
    ...d,
    opm: d.revenue ? (d.operatingProfit / d.revenue) * 100 : null,
    npm: d.revenue ? (d.netIncome / d.revenue) * 100 : null,
    roe: d.equity ? (d.netIncome / d.equity) * 100 : null,
    cogsRatio: d.revenue ? (d.cogs / d.revenue) * 100 : null,
    sgaRatio: d.revenue ? (d.sga / d.revenue) * 100 : null,
    revenueGrowth: prev ? ((d.revenue / prev.revenue) - 1) * 100 : null,
    opGrowth: prev && prev.operatingProfit !== 0 ? ((d.operatingProfit / prev.operatingProfit) - 1) * 100 : null,
    niGrowth: prev && prev.netIncome !== 0 ? ((d.netIncome / prev.netIncome) - 1) * 100 : null,
    equityGrowth: prev ? ((d.equity / prev.equity) - 1) * 100 : null
  };
});

const KRW_100M = 100000000;
const wonToEok = (v) => v / KRW_100M;
const formatEok = (v) => v == null ? "-" : `${wonToEok(v).toLocaleString("ko-KR", {maximumFractionDigits:2})}억원`;
const formatPct = (v) => v == null || Number.isNaN(v) ? "-" : `${v.toLocaleString("ko-KR", {minimumFractionDigits:1, maximumFractionDigits:1})}%`;
const toneClass = (v) => v == null || Number.isNaN(v) ? "" : v > 0 ? "positive" : v < 0 ? "negative" : "";

const yearSelect = document.getElementById("yearSelect");
const tabs = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

data.forEach(d => {
  const opt = document.createElement("option");
  opt.value = d.year;
  opt.textContent = d.year;
  if (d.year === 2025) opt.selected = true;
  yearSelect.appendChild(opt);
});

function selected() {
  return data.find(d => d.year === Number(yearSelect.value)) || data[data.length - 1];
}

function buildTable() {
  document.getElementById("tableBody").innerHTML = data.map(d => `
    <tr>
      <td>${d.year}</td>
      <td>${formatEok(d.revenue)}</td>
      <td class="${toneClass(d.operatingProfit)}">${formatEok(d.operatingProfit)}</td>
      <td class="${toneClass(d.netIncome)}">${formatEok(d.netIncome)}</td>
      <td>${formatEok(d.assets)}</td>
      <td>${formatEok(d.equity)}</td>
      <td>${formatPct(d.cogsRatio)}</td>
      <td>${formatPct(d.sgaRatio)}</td>
      <td>${formatPct(d.opm)}</td>
      <td>${formatPct(d.npm)}</td>
      <td>${formatPct(d.roe)}</td>
    </tr>
  `).join("");
}

function renderCards() {
  const s = selected();
  const setText = (id, value, changeId, changeText, changeValue) => {
    document.getElementById(id).textContent = value;
    const el = document.getElementById(changeId);
    el.textContent = changeText;
    el.className = `small ${toneClass(changeValue)}`;
  };
  setText("revenueValue", formatEok(s.revenue), "revenueChange", `전년 대비 ${formatPct(s.revenueGrowth)}`, s.revenueGrowth);
  setText("opValue", formatEok(s.operatingProfit), "opChange", `전년 대비 ${formatPct(s.opGrowth)}`, s.opGrowth);
  setText("niValue", formatEok(s.netIncome), "niChange", `전년 대비 ${formatPct(s.niGrowth)}`, s.niGrowth);
  setText("equityValue", formatEok(s.equity), "equityChange", `전년 대비 ${formatPct(s.equityGrowth)}`, s.equityGrowth);
}

function barOptions(unit="억원") {
  return {
    maintainAspectRatio:false,
    plugins:{
      legend:{display:false},
      tooltip:{callbacks:{label:(ctx)=>`${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("ko-KR", {maximumFractionDigits:2})}${unit}`}}
    },
    scales:{y:{ticks:{callback:(v)=>`${v}${unit === "억원" ? "억" : "%"}`}}}
  };
}

function lineOptions() {
  return {
    maintainAspectRatio:false,
    interaction:{mode:"index",intersect:false},
    plugins:{
      legend:{display:false},
      tooltip:{callbacks:{label:(ctx)=>`${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("ko-KR", {maximumFractionDigits:2})}%`}}
    },
    scales:{y:{ticks:{callback:(v)=>`${v}%`}}}
  };
}

function createBarChart(id, label, values, unit="억원") {
  return new Chart(document.getElementById(id), {
    type:"bar",
    data:{labels:data.map(d=>d.year), datasets:[{label, data:values}]},
    options:barOptions(unit)
  });
}

function createLineChart(id, label, values) {
  return new Chart(document.getElementById(id), {
    type:"line",
    data:{labels:data.map(d=>d.year), datasets:[{label, data:values, borderWidth:2.5, tension:.25, fill:false}]},
    options:lineOptions()
  });
}

function createCharts() {
  createBarChart("revenueChart", "매출액", data.map(d=>wonToEok(d.revenue)));
  createBarChart("opChart", "영업이익", data.map(d=>wonToEok(d.operatingProfit)));
  createBarChart("niChart", "당기순이익", data.map(d=>wonToEok(d.netIncome)));

  createLineChart("cogsChart", "매출원가율", data.map(d=>d.cogsRatio));
  createLineChart("sgaChart", "판관비율", data.map(d=>d.sgaRatio));
  createLineChart("opmChart", "영업이익률", data.map(d=>d.opm));
  createLineChart("npmChart", "순이익률", data.map(d=>d.npm));

  new Chart(document.getElementById("balanceChart"), {
    type:"bar",
    data:{
      labels:data.map(d=>d.year),
      datasets:[
        {label:"자산총계", data:data.map(d=>wonToEok(d.assets))},
        {label:"부채총계", data:data.map(d=>wonToEok(d.liabilities))},
        {label:"자본총계", data:data.map(d=>wonToEok(d.equity))}
      ]
    },
    options:{
      maintainAspectRatio:false,
      plugins:{
        legend:{position:"bottom"},
        tooltip:{callbacks:{label:(ctx)=>`${ctx.dataset.label}: ${ctx.parsed.y.toLocaleString("ko-KR", {maximumFractionDigits:2})}억원`}}
      },
      scales:{y:{ticks:{callback:(v)=>`${v}억`}}}
    }
  });
}

tabs.forEach(btn => btn.addEventListener("click", () => {
  tabs.forEach(b => b.classList.remove("active"));
  tabContents.forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById(btn.dataset.tab).classList.add("active");
}));

yearSelect.addEventListener("change", renderCards);
buildTable();
createCharts();
renderCards();
