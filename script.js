mapboxgl.accessToken =
  "pk.eyJ1IjoiY2l2aWNuZWJyYXNrYSIsImEiOiJjbGRkaXdnMWowNDBvM3FwNWcybnE2NXhmIn0.KAyFk0TA3OaiUOFCnjXXNA";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/civicnebraska/cldnq390d003n01pz0zzaiyri", // style URL
  center: [-99.60554664374831, 41.478777848167454], // starting position [lng, lat]
  zoom: 5.9, // starting zoom
  projection: "globe", // display the map as a 3D globe
  customAttribution: "Civic Nebraska",
});

// used to change zoom-level of mapbox styles depending on pixel width of users device
map.on("load", function () {
  var screenSize = window.innerWidth;
  var zoom = screenSize < 600 ? 4 : 5.9;
  map.flyTo({
    center: [-99.60554664374831, 41.478777848167454],
    zoom: zoom,
    speed: 0.5,
    curve: 1,
  });
});

const nav = new mapboxgl.NavigationControl({
  visualizePitch: true,
});

map.addControl(nav, "bottom-left");

const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  bbox: [-104.326172, 39.97712, -96.503906, 42.875964],
});

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
// geocoder.addTo("#menu");

// empty popup component
let popup = new mapboxgl.Popup({
  offset: [0, -7],
  closeButton: true,
  closeOnClick: false,
  maxWidth: "325px",
});

// used to change mapbox styles on input id
const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

// legend html variables
const legend1 = document.getElementById("voter-legend");
const legend2 = document.getElementById("voter-legendZC");
const legend3 = document.getElementById("voter-legendC");
const legend4 = document.getElementById("income-legend");
const legend5 = document.getElementById("belowP-legend");
const legend6 = document.getElementById("aboveP-legend");
const legend7 = document.getElementById("disability-legend");
const legend8 = document.getElementById("plus60-legend");
const legend9 = document.getElementById("children-legend");
const legend10 = document.getElementById("white-legend");
const legend11 = document.getElementById("hl-legend");
const legend12 = document.getElementById("asian-legend");
const legend13 = document.getElementById("black-legend");
const legend14 = document.getElementById("indian-legend");

// id variables for legend if/else statement
const idVote = "cldnq390d003n01pz0zzaiyri";
const idVoteZC = "cldrrte7c004r01p1yznwm06e";
const idVoteC = "cldxps0sh002a01piid30h7vb";
const idIncome = "cldos7f3k001g01phn2a4chqs";
const idBelowP = "cldosdfe1004b01mye32nxrxe";
const idAboveP = "cldosiygr001k01o3jk8gm8dj";
const idDis = "cldnss1x4002c01myabedghax";
const id60 = "cldotih7h001p01mhhlo61jni";
const idChild = "cldnsz24b001t01lttai1x1l3";
const idWhite = "cldorzs59001f01ph42y8dd6c";
const idHL = "cldnskbs1006o01qhc074d4so";
const idAsian = "cldnsdzmj006n01qhwmn8a518";
const idBlack = "cldnrywk5001r01ltey2ciqa1";
const idIndian = "cldns58yf000201s6v2o1tyqz";

// map.on("load", function () {
//   updateBounds();

//   map.on("move", function () {
//     updateBounds();
//   });
// });

// function updateBounds() {
//   var bounds = map.getBounds();

//   console.log(
//     bounds.getWest(),
//     bounds.getSouth(),
//     bounds.getEast(),
//     bounds.getNorth()
//   );
// }

// function used to change map styles
for (const input of inputs) {
  input.onclick = (layer) => {
    // console.log(layer);
    const layerId = layer.target.id;
    map.setStyle("mapbox://styles/civicnebraska/" + layerId);

    // else if statement for legend
    if (layerId === idVote) {
      // legend6.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend2.style.display = "none";
      legend3.style.display = "none";
      legend1.style.display = "block";

      //   legend.style.color = "green";
    } else if (layerId === idVoteZC) {
      // legend6.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "block";
      // legend.setAttribute("id", "poverty-legend");
      //   legend.style.color = "black";
    } else if (layerId === idVoteC) {
      // legend6.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "block";

      // legend.setAttribute("id", "poverty-legend");
      //   legend.style.color = "black";
    } else if (layerId === idIncome) {
      // legend6.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "block";
    } else if (layerId === idBelowP) {
      // legend6.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "block";

      // console.log(`it's the right id`);
    } else if (layerId === idAboveP) {
      // legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "block";

      // console.log(`it's the right id`);
    } else if (layerId === idDis) {
      // legend6.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "block";

      // console.log(`it's the right id`);
    } else if (layerId === id60) {
      // legend6.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "block";

      // console.log(`it's the right id`);
    } else if (layerId === idChild) {
      // legend6.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "block";

      // console.log(`it's the right id`);
    } else if (layerId === idWhite) {
      // legend6.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "block";
    } else if (layerId === idHL) {
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "block";
    } else if (layerId === idAsian) {
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend3.style.display = "none";
      legend2.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "none";
      legend12.style.display = "block";
    } else if (layerId === idBlack) {
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend2.style.display = "none";
      legend3.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "none";
      legend13.style.display = "block";
    } else if (layerId === idIndian) {
      legend13.style.display = "none";
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend2.style.display = "none";
      legend3.style.display = "none";
      legend1.style.display = "none";
      legend14.style.display = "block";
    } else {
      legend12.style.display = "none";
      legend11.style.display = "none";
      legend10.style.display = "none";
      legend9.style.display = "none";
      legend8.style.display = "none";
      legend7.style.display = "none";
      legend6.style.display = "none";
      legend5.style.display = "none";
      legend4.style.display = "none";
      legend2.style.display = "none";
      legend3.style.display = "none";
      legend1.style.display = "none";
      legend13.style.display = "none";
    }
  };
}

map.on("click", (e) => {
  // const mapStyle = map.getStyle().sourceLayer;
  // console.log(mapStyle);
  const loader = map.getStyle().name;
  console.log(loader);
  if (loader !== "Zip_Code" && loader !== "County") {
    const features = map.queryRenderedFeatures(e.point, {
      // layers: ["mapbox-final-2-arttge copy"],
    });

    // popup variables
    // console.log(features);
    const properties = features[0].properties;
    // console.log(properties);
    const census = properties.NAMELSAD;
    const voterTurnout = properties.Voter_Turn;
    const medianIncome = properties.Median_Inc;
    const over60 = properties.Over_60;
    const disab = properties.Househol_D;
    const childUnder18 = properties.Child_Unde;
    const abovePoverty = properties.Above_Pov;
    const blackAlone = properties.Black_pop;
    const asianAlone = properties.Asian_Alon;
    const amIndianAlone = properties.Am_Indian;
    const whiteAlone = properties.White_Alon;
    const hisLatAlone = properties.Hispanic_L;
    const countyName = properties.CT_NAME.split(",");
    const county = countyName[1];
    // console.log(county);

    var lat = e.lngLat.lat;
    var lng = e.lngLat.lng;
    var coordinates = [];
    coordinates.push(lng, lat);
    popup
      .setLngLat(coordinates)
      .setHTML(
        `<h6><strong>${census}</strong></h6><hr style="height:2px;border-width:0;color:gray;background-color:gray"><nobr><strong>County: </strong>${county}</nobr><br><nobr><strong>Median Income: </strong>$${medianIncome}</nobr><p><strong>Voter Turnout: </strong>${voterTurnout}%<br>
        <nobr><strong>Above Poverty: </strong>${abovePoverty}% </nobr><br><nobr><strong>Homes w/ at least one 60 year old: </strong>${over60}%<br>
       <nobr><strong>Homes w/ at least one child under 18 years old: </strong>${childUnder18}% <br><nobr><strong>Black Pop: </strong>${blackAlone}%<br>
        <nobr><strong>Homes w/ at least one person w/ Disability: </strong>${disab}%<nobr><br><strong>Asian Pop: </strong>${asianAlone}%<nobr><br><nobr><strong>American Indian Pop: </strong>${amIndianAlone}%
        </nobr><br><nobr><strong>White Pop: </strong>${whiteAlone}%</nobr><br><nobr><strong>Hispanic/Latino Pop: </strong>${hisLatAlone}%`
      )
      .addTo(map);
    // popup for zip-code map
  } else if (loader === "Zip_Code") {
    const features = map.queryRenderedFeatures(e.point, {});
    const properties = features[0].properties;
    // console.log(properties);

    const zipCode = properties.NAME20;
    const City = properties.City;
    const voterTurnout = properties.Vote_Turn;
    var lat = e.lngLat.lat;
    var lng = e.lngLat.lng;
    var coordinates = [];
    coordinates.push(lng, lat);

    popup
      .setLngLat(coordinates)
      .setHTML(
        `<h6><strong>Zip-Code: ${zipCode}</strong></h6><hr style="height:2px;border-width:0;color:gray;background-color:gray"><nobr><strong>City: </strong>${City}</nobr><p><strong>Voter Turnout: </strong>${voterTurnout}%
        </p>`
      )
      .addTo(map);
  } else {
    const features = map.queryRenderedFeatures(e.point, {});
    const properties = features[0].properties;

    const CountyName = properties.Cnty_Name;
    const voterTurnout = properties.Vote_Turn;

    var lat = e.lngLat.lat;
    var lng = e.lngLat.lng;
    var coordinates = [];
    coordinates.push(lng, lat);

    popup
      .setLngLat(coordinates)
      .setHTML(
        `<h6><strong>County: ${CountyName}</strong></h6><hr style="height:2px;border-width:0;color:gray;background-color:gray"><p><strong>Voter Turnout: </strong>${voterTurnout}%
        </p>`
      )
      .addTo(map);
  }
});
