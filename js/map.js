var custom_marker_icon = L.divIcon({
	html: '<span class="icon is-size-4"><i class="fa fa-map-marker-alt"></i><span>',
	iconSize: [18,24],
	iconAnchor: [9,24],
	className: 'marker-icon'});

var clf_positions = [];

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
	var latlng = [clf.position.latitude, clf.position.longitude]
	var marker = L.marker(
		latlng,
		{
			icon: custom_marker_icon,
			title: clf.name,
			alt: clf.name
		}).bindTooltip(clf.name, {permanent: true, direction: 'top', offset: [3,-8]}).addTo(map);
	clf_positions.push(latlng);
}

function center_map(map) {
	map.fitBounds(clf_positions, {maxZoom: 13});
}
