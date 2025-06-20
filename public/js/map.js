
const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapToken}`,
    center: listing.geometry.coordinates, 
    zoom: 9,
});


const marker = new maplibregl.Marker({color: "red"})
  .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinates 
  .setPopup(new maplibregl.Popup({offset: 25})
  .setHTML(`<h4>${listing.title}</h4><p>Exact Location will be provided after booking</p>`))  
  .addTo(map);
