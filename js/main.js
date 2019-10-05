function create_clf_list_entry(clf) {
	var clf_tile_template = document.querySelector('#clf_tile');
	var clf_tile = document.importNode(clf_tile_template.content, true);
	clf_tile.querySelector("p.title").textContent = clf.name;
	clf_tile.querySelector("a.address_text").textContent = clf.position.address;
	clf_tile.querySelector("a.address_text").href =
		'geo:' + clf.position.latitude + ',' + clf.position.longitude + '?q=' + clf.position.latitude + ',' + clf.position.longitude + '(' + clf.name + ')';
	clf_tile.querySelector("a.url").href = clf.url;
	clf_tile.querySelector("a.url").textContent = clf.url;
	clf_tile.querySelector("p.working-days").textContent = clf["working days"];
	return clf_tile;
}
function main() {
	var map = setup_map();
	loadJSON("data/ciclofficine.json", function(ciclofficine) {
		ciclofficine.forEach(function(clf) {
			var clf_tile = create_clf_list_entry(clf);
			document.getElementById('tile_container').appendChild(clf_tile);
			add_clf_to_map(map, clf);
		});
		center_map(map);
	});
}

main();
