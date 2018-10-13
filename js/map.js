function setup_map() {
	var osmUrl="https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png";
	var osmAttrib='Map data &copy <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var bcn_latlng = L.latLng(41.39200,2.1656738);

	var map = L.map('map')
	L.tileLayer(osmUrl, {
		attribution: osmAttrib,
	}
	).addTo(map);
	map.setView(bcn_latlng, 12);
	return map;
}

function add_clf_to_map(map, clf) {
	L.marker(
		[clf.position.latitude, clf.position.longitude],
		{
			title: clf.name,
			alt: clf.name
		}).addTo(map);
}
