//Add Document Elements with D3
d3.select("body").append("h1").text("Learning D3");

//Select a Group of Elements with D3
d3.selectAll("li").text("list item");

//Work with Data in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text("New Title");

//Work with Dynamic Data in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD");

//Add Inline Styling to Elements
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD")
  .style("font-family", "verdana");

//Change Styles Based on Data
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => d + " USD")
  .style("color", (d) => (d < 20 ? "red" : "green"));

//Add Classes with D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar");

//Update the Height of an Element Dynamically
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d + "px");

//Change the Presentation of a Bar Chart
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", (d) => d * 10 + "px");

//Learn About SVG in D3
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

//Display Shapes with SVG
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .append("rect")
  .attr("width", 25)
  .attr("height", 100)
  .attr("x", 0)
  .attr("y", 0);

//Create a Bar for Each Data Point in the Set
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

//Dynamically Set the Coordinates for Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => {
    return i * 30;
  })
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", 100);

//Dynamically Change the Height of Each Bar
const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

const w = 500;
const h = 100;

const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);

svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("x", (d, i) => i * 30)
  .attr("y", 0)
  .attr("width", 25)
  .attr("height", (d, i) => {
    return d * 3;
  });
