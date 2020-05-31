var custom_marker_icon = L.divIcon({
	html: '<span class="icon is-size-4"><i class="fa fa-map-marker-alt"></i><span>',
	iconSize: [18,24],
	iconAnchor: [9,24],
	className: 'marker-icon'});

var clf_positions = [];

function setup_map() {
	var osmUrl='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
	var osmAttrib='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
	var bcn_latlng = L.latLng(41.39200,2.1656738);

	var map = L.map('map', {dragging: !L.Browser.mobile })
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
	map.fitBounds(clf_positions, {padding: [50,50]});
}
